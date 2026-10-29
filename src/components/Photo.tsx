import { getPhoto, type PhotoId } from "@/data/photos";

interface PhotoProps {
  id: PhotoId;
  /** Attribut `sizes` : largeur réellement affichée selon le point de rupture. */
  sizes: string;
  /** Image principale visible dès l'arrivée : chargement prioritaire. */
  priority?: boolean;
  /**
   * `natural` : conserve les proportions d'origine.
   * `cover`   : remplit le conteneur parent (positionné en `relative`) en recadrant.
   */
  fit?: "natural" | "cover";
  /** Point focal pour le recadrage `cover`, ex. « 50% 30% ». */
  position?: string;
  className?: string;
}

/** Affiche une photographie issue du dossier `images/` (variantes WebP responsives). */
export function Photo({ id, sizes, priority = false, fit = "natural", position, className = "" }: PhotoProps) {
  const photo = getPhoto(id);
  const layout =
    fit === "cover" ? "absolute inset-0 h-full w-full object-cover" : "block h-auto w-full";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`${layout} ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
