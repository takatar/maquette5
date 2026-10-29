import manifest from "./photos.generated.json";

/**
 * Catalogue des photographies du dossier `images/` (aucune image externe).
 * `file` = nom du fichier d'origine sans extension, tel qu'il existe dans `images/`.
 * Les variantes WebP sont générées dans `public/photos/` par `npm run optimize-images`.
 * Les textes alternatifs décrivent uniquement ce qui est visible sur chaque photo.
 */
const DEFINITIONS = {
  poolMuralAerial: {
    file: "20261028_175133",
    alt: "Vue plongeante sur la piscine de la résidence, bordée d'un mur orné d'une fresque en carreaux rouges, bleus, jaunes et blancs aux lignes noires",
  },
  poolMuralSide: {
    file: "20261028_174951",
    alt: "La piscine et le mur de carreaux colorés aux lignes noires, sous un ciel bleu",
  },
  poolBuilding: {
    file: "20261028_175009",
    alt: "La piscine reflétant le bâtiment blanc de la résidence et son escalier en colimaçon",
  },
  courtyardColumn: {
    file: "20261028_175016",
    alt: "Façade blanche de la cour intérieure, rehaussée d'une colonne de carreaux jaunes, rouges, bleus et blancs, près du bord de la piscine",
  },
  towerLowAngle: {
    file: "20261028_175045",
    alt: "Contre-plongée sur une façade recouverte de carreaux jaunes, rouges, bleus et blancs séparés par des lignes noires, dans l'esprit des compositions de Mondrian",
  },
  courtyardBalconies: {
    file: "20261028_175156",
    alt: "Cour intérieure de la résidence : bâtiment blanc à deux niveaux, escalier central, garde-corps ajourés et coin de piscine",
  },
  courtyardStairs: {
    file: "20261028_175214",
    alt: "Cour intérieure pavée, escalier central et garde-corps ajourés, avec la piscine au premier plan",
  },
  staircaseDetail: {
    file: "20261028_175240",
    alt: "Escalier extérieur aux garde-corps en métal découpé à motif végétal",
  },
  kitchenTv: {
    file: "20261028_180613",
    alt: "Pièce de vie avec un coin cuisine aux placards rouges et un téléviseur mural",
  },
  bathroom: {
    file: "20261028_180644",
    alt: "Salle d'eau avec vasque posée sur un meuble noir, miroir lumineux et douche",
  },
  bedroomTwin: {
    file: "20261028_180730",
    alt: "Chambre avec deux lits, une armoire, un bureau, un téléviseur mural et une fenêtre à motif ajouré",
  },
  bedroomOrange: {
    file: "20261028_180846",
    alt: "Chambre lumineuse avec un lit à tête de lit orange, un climatiseur mural, une table avec chaises et une porte-fenêtre",
  },
  kitchenDining: {
    file: "20261028_180937",
    alt: "Pièce de vie avec une table et des chaises grises devant un coin cuisine aux placards rouges et un réfrigérateur",
  },
  tvWardrobe: {
    file: "20261028_181001",
    alt: "Mur équipé d'un téléviseur et d'un bureau, avec une grande armoire en bois clair",
  },
  mezzanine: {
    file: "20261028_181051",
    alt: "Intérieur avec téléviseur mural, bureau, armoire en bois clair et escalier aux rampes en inox",
  },
  diningKitchen: {
    file: "20261028_181115",
    alt: "Table et chaises brunes devant un coin cuisine rouge, avec une baie vitrée donnant sur la cour",
  },
  diningMural: {
    file: "20261028_181126",
    alt: "Pièce lumineuse avec table et chaises ; par la baie vitrée, on aperçoit la piscine et la fresque de carreaux colorés",
  },
  streetFacade: {
    file: "20261028_182516",
    alt: "Façade de la résidence côté rue, ornée d'une bande de carreaux bleus, blancs et rouges",
  },
  streetFacadePortrait: {
    file: "20261028_182525",
    alt: "Façade blanche de la résidence vue depuis la rue, avec sa bande verticale de carreaux bleus, blancs et rouges",
  },
  streetFacadePortraitAlt: {
    file: "20261028_182525-2",
    alt: "Façade de la résidence et trottoir pavé, avec une bande verticale de carreaux bleus, blancs et rouges",
  },
} as const satisfies Record<string, { file: string; alt: string }>;

export type PhotoId = keyof typeof DEFINITIONS;

interface ManifestEntry {
  width: number;
  height: number;
  widths: number[];
  source: string;
}

const generated = manifest as Record<string, ManifestEntry>;

export interface PhotoData {
  id: PhotoId;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

export function getPhoto(id: PhotoId): PhotoData {
  const definition = DEFINITIONS[id];
  const entry = generated[definition.file];
  if (!entry) {
    throw new Error(
      `Photographie introuvable dans images/ : « ${definition.file} ». Lancez « npm run optimize-images ».`,
    );
  }
  const defaultWidth = entry.widths.includes(960) ? 960 : entry.widths[entry.widths.length - 1];
  return {
    id,
    src: `/photos/${definition.file}-${defaultWidth}.webp`,
    srcSet: entry.widths.map((w) => `/photos/${definition.file}-${w}.webp ${w}w`).join(", "),
    width: entry.width,
    height: entry.height,
    alt: definition.alt,
  };
}

/** Chemin de la plus grande variante, utile pour les images de partage (Open Graph). */
export function getLargestPhotoPath(id: PhotoId): string {
  const definition = DEFINITIONS[id];
  const entry = generated[definition.file];
  if (!entry) throw new Error(`Photographie introuvable : ${definition.file}`);
  const w = entry.widths.includes(1440) ? 1440 : entry.widths[entry.widths.length - 1];
  return `/photos/${definition.file}-${w}.webp`;
}
