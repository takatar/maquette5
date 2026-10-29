# syntax=docker/dockerfile:1
#
# Le Mondrian — site vitrine (Next.js en export statique).
# L'image finale ne contient que des fichiers HTML/CSS/JS/WebP servis par nginx :
# aucun processus Node n'est nécessaire en production.
#
#    docker build -t maquette5 .
#    docker run --rm -p 8080:80 maquette5      -> http://localhost:8080
#

# ---------- 1. Dépendances ----------
FROM node:22-bookworm-slim AS deps
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---------- 2. Build -> /app/out ----------
FROM node:22-bookworm-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# `npm run build` lance d'abord scripts/optimize-images.mjs (si `images/` est absent,
# les versions WebP déjà présentes dans public/photos sont conservées) puis next build.
RUN npm run build && test -f out/index.html

# ---------- 3. Serveur statique ----------
FROM nginx:alpine AS runner

LABEL org.opencontainers.image.title="Le Mondrian — site vitrine" \
      org.opencontainers.image.description="Site statique Next.js servi par nginx" \
      org.opencontainers.image.source="https://github.com/takatar/maquette5"

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1
