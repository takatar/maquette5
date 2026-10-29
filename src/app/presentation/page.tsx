import type { Metadata } from "next";
import {
  PresentationFormat,
  PresentationWelcome,
} from "@/components/presentation/PresentationBottom";
import {
  PresentationConcept,
  PresentationInspiration,
  PresentationIntro,
} from "@/components/presentation/PresentationTop";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Notre résidence | Le Mondrian à Saly",
  description:
    "Découvrez Le Mondrian, résidence hôtelière de 17 chambres à Saly Portudal (Sénégal) : un concept contemporain inspiré de l'art géométrique de Piet Mondrian.",
  path: "/presentation",
  image: "poolMuralAerial",
});

export default function PresentationPage() {
  return (
    <>
      <PresentationIntro />
      <PresentationConcept />
      <PresentationInspiration />
      <PresentationFormat />
      <PresentationWelcome />
    </>
  );
}
