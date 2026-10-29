import type { Metadata } from "next";
import { getLargestPhotoPath, getPhoto, type PhotoId } from "@/data/photos";

export function pageMetadata(options: {
  title: string;
  description: string;
  path: string;
  image: PhotoId;
}): Metadata {
  const photo = getPhoto(options.image);
  return {
    title: { absolute: options.title },
    description: options.description,
    alternates: { canonical: options.path },
    openGraph: {
      title: options.title,
      description: options.description,
      url: options.path,
      locale: "fr_FR",
      type: "website",
      images: [{ url: getLargestPhotoPath(options.image), alt: photo.alt }],
    },
  };
}
