/**
 * Génère des versions web (WebP, plusieurs largeurs) à partir des photographies
 * du dossier `images/`. Aucune image externe n'est utilisée : les originaux ne sont
 * jamais modifiés et les noms de fichiers sont conservés (suffixe de largeur ajouté).
 *
 *   images/20261028_175133.png  ->  public/photos/20261028_175133-480.webp, -960.webp, ...
 *
 * Un manifeste (largeur / hauteur / largeurs disponibles) est écrit dans
 * src/data/photos.generated.json pour que les composants construisent les `srcset`.
 */
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIR = path.join(root, "images");
const OUTPUT_DIR = path.join(root, "public", "photos");
const MANIFEST_PATH = path.join(root, "src", "data", "photos.generated.json");

const WIDTHS = [480, 960, 1440, 1920];
const IMAGE_EXTENSION = /\.(png|jpe?g)$/i;

const toKey = (name) => name.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");

async function modifiedTime(file) {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
}

/** Les versions WebP déjà générées sont-elles exploitables ? */
async function existingWebpFiles() {
  try {
    const entries = await readdir(OUTPUT_DIR, { withFileTypes: true });
    return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".webp")).length;
  } catch {
    return 0;
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });

  // `images/` est volontairement absent du dépôt et de l'image Docker : seules
  // les versions WebP optimisées (public/photos) et le manifeste sont versionnés.
  // Sans originaux, on conserve donc les fichiers déjà présents.
  let entries = [];
  try {
    entries = await readdir(SOURCE_DIR, { withFileTypes: true });
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }

  const files = entries
    .filter((entry) => entry.isFile() && IMAGE_EXTENSION.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  if (files.length === 0) {
    const available = await existingWebpFiles();
    if (available === 0) {
      throw new Error(
        `Aucune photographie : ni source dans ${SOURCE_DIR}, ni version WebP dans ${OUTPUT_DIR}.`,
      );
    }
    console.log(
      `[images] Dossier "images/" absent ou vide : conservation des ${available} version(s) WebP déjà présentes dans public/photos.`,
    );
    return;
  }

  const manifest = {};
  let generated = 0;

  for (const name of files) {
    const input = path.join(SOURCE_DIR, name);
    const key = toKey(path.parse(name).name);
    const sourceTime = await modifiedTime(input);

    const base = sharp(input).rotate();
    const { width, height } = await sharp(input).metadata();
    if (!width || !height) throw new Error(`Dimensions illisibles : ${name}`);

    const widths = WIDTHS.filter((w) => w <= width);
    if (widths.length === 0) widths.push(width);

    for (const w of widths) {
      const output = path.join(OUTPUT_DIR, `${key}-${w}.webp`);
      if ((await modifiedTime(output)) >= sourceTime) continue;
      await base
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(output);
      generated += 1;
    }

    manifest[key] = { width, height, widths, source: `images/${name}` };
  }

  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `[images] ${files.length} photographies traitées, ${generated} fichier(s) généré(s) dans public/photos`,
  );
}

main().catch((error) => {
  console.error("[images] Échec de l'optimisation :", error);
  process.exit(1);
});
