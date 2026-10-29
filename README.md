# Le Mondrian — Résidence hôtelière à Saly Portudal

Site vitrine de 4 pages (Accueil, Présentation, Services, Contact) — Next.js, TypeScript, Tailwind CSS.
Toute réservation passe par WhatsApp : aucun moteur de réservation ni paiement.

## Lancer le site

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique dans out/
```

`npm run dev` et `npm run build` génèrent d'abord les versions WebP optimisées des photos du dossier `images/`
(vers `public/photos/`). Les originaux ne sont jamais modifiés, aucune image externe n'est utilisée.

> **Important — nom du dossier** : le dossier du projet s'appelle « Site web **#1** ». Le caractère `#` fait échouer
> la compilation de Next.js / Tailwind (erreur « null bytes »). Renommez le dossier (ex. `Site-web-1`) ou copiez le projet
> dans un chemin sans `#` avant de lancer `npm run dev` / `npm run build`.

## Ce qu'il faut remplacer avant la mise en ligne

Tout est centralisé dans **`src/config/site.ts`** :

| Élément | Constante |
| --- | --- |
| Numéro WhatsApp (fictif) | `WHATSAPP_NUMBER` (chiffres uniquement, avec indicatif) |
| Message prérempli | `RESERVATION_MESSAGE` |
| Lien utilisé par TOUS les boutons « Réservation » | `WHATSAPP_RESERVATION_URL` |
| Adresse, téléphone, e-mail (fictifs) | `CONTACT` — passer `isDemo` à `false` une fois les vraies valeurs saisies |
| URL du site | `SITE_URL` |
| Envoi du formulaire de contact | `CONTACT_FORM_ENDPOINT` (tant qu'il vaut `null`, rien n'est simulé : le message est préparé dans WhatsApp) |

Services, informations pratiques et aperçus de chambres : **`src/data/content.ts`**.
Photos et textes alternatifs : **`src/data/photos.ts`**.
Mentions légales et politique de confidentialité : sections à compléter en bas de la page Contact.

## Structure

- `src/app/` : les 4 pages (`/`, `/presentation`, `/services`, `/contact`) et le layout.
- `src/components/` : Header, Footer, Logo, boutons de réservation, bouton WhatsApp flottant, cartes, formulaire, éléments Mondrian.
- `scripts/optimize-images.mjs` : optimisation des photos de `images/`.
- `Dockerfile` + `deploy/nginx.conf` : image de production (export statique servi par nginx).

## Déploiement

Le site est un **export statique** (`output: "export"` dans `next.config.mjs`) : le build produit
le dossier `out/`, qui est servi par nginx. Aucun serveur Node n'est nécessaire en production.

### Tester l'image en local

```bash
docker build -t maquette5 .
docker run --rm -p 8080:80 maquette5   # -> http://localhost:8080
```

Caractéristiques de l'image :

| Élément | Valeur |
| --- | --- |
| Étapes | `node:22-bookworm-slim` (dépendances) → build (`npm run build`) → `nginx:alpine` |
| Port exposé | `80` |
| Contenu final | ~7 Mo (`out/` uniquement : HTML, CSS, JS, WebP) |
| Healthcheck | `GET /healthz` → `200 ok` |
| Cache | `/_next/static/*` 1 an, `/photos/*` 30 jours, HTML `no-cache` |
| Erreurs | page `404.html` du site |

> `images/` (les ~110 Mo de photos originales) est exclu du dépôt git et du contexte Docker :
> seules les versions WebP optimisées de `public/photos/` et le manifeste
> `src/data/photos.generated.json` sont versionnés. En local, `npm run dev` / `npm run build`
> régénère ces WebP dès que `images/` est présent.

### Publier sur GitHub

```bash
git init -b main
git add -A
git commit -m "Site Le Mondrian + Dockerfile de production"
git remote add origin https://github.com/takatar/maquette5.git
git push -u origin main
```

### Créer la ressource sur Coolify

1. **DNS** : chez le registraire de `immed-ia.com`, créer un enregistrement
   `A` → `maquette5` → **IP du VPS Hostinger** (et éventuellement un `AAAA` si IPv6).
   Vérifier : `nslookup maquette5.immed-ia.com`.
2. Coolify → projet → **+ New** → **Public Repository** → URL
   `https://github.com/takatar/maquette5.git`, branche `main`.
3. **Build Pack** : `Dockerfile`. **Dockerfile Location** : `/Dockerfile`.
   **Base Directory** : `/`. **Ports Exposes** : `80`.
4. **Domains** : `https://maquette5.immed-ia.com` (HTTPS activé, Let's Encrypt).
5. **Deploy**. Coolify construit l'image, démarre le conteneur et émet le certificat.

Les mises à jour suivantes se font par un simple `git push` sur `main` (webhook GitHub automatique).

