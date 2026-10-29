import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HomeLocation } from "@/components/home/HomeLocation";
import { HomeRooms } from "@/components/home/HomeRooms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Le Mondrian | Résidence hôtelière à Saly Portudal",
  description:
    "Le Mondrian, résidence hôtelière de 17 chambres au cœur de Saly Portudal, au Sénégal. Un univers contemporain inspiré de Piet Mondrian. Réservation via WhatsApp.",
  path: "/",
  image: "poolMuralSide",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeRooms />
      <HomeExperience />
      <HomeLocation />
      <CtaBand />
    </>
  );
}
