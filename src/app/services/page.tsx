import type { Metadata } from "next";
import { InfoCard, ServiceCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Mondrian";
import { Photo } from "@/components/Photo";
import { PRACTICAL_INFO, SERVICES } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services et informations pratiques | Le Mondrian",
  description:
    "Services et informations pratiques pour préparer votre séjour au Mondrian, résidence hôtelière de 17 chambres à Saly Portudal (Sénégal). Renseignements sur WhatsApp.",
  path: "/services",
  image: "courtyardBalconies",
});

const ACCENTS = ["bg-mond-red", "bg-mond-blue", "bg-mond-yellow"];

export default function ServicesPage() {
  return (
    <>
      {/* 1 — Introduction */}
      <section aria-labelledby="services-title" className="border-b-[5px] border-ink">
        <div className="grid lg:grid-cols-12">
          <div className="relative order-2 min-h-[20rem] border-t-[5px] border-ink lg:order-1 lg:col-span-5 lg:border-r-[5px] lg:border-t-0">
            <Photo id="courtyardBalconies" fit="cover" priority position="40% 50%" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
          <div className="order-1 flex flex-col justify-center px-5 py-14 sm:px-10 lg:order-2 lg:col-span-7 lg:px-16 lg:py-24">
            <Eyebrow color="blue">Services</Eyebrow>
            <h1 id="services-title" className="rise-in font-display text-5xl leading-[1.05] sm:text-6xl">
              Les services du Mondrian.
            </h1>
            <p className="rise-in rise-in-delay-1 mt-6 max-w-2xl text-lg text-ink/80">
              Retrouvez les informations utiles pour préparer votre séjour au cœur de Saly Portudal. Notre équipe pourra
              vous renseigner sur les équipements, les services disponibles et les modalités d&apos;accueil.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — Présentation des services */}
      <section aria-labelledby="grid-title" className="wrap py-20 sm:py-28">
        <h2 id="grid-title" className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
          Ce que nous pouvons vous dire aujourd&apos;hui.
        </h2>
        <p className="mt-5 max-w-2xl text-ink/75">
          Seuls les éléments visibles sur nos photographies sont mentionnés, avec la précision que le détail dépend des
          chambres. Pour tout le reste, aucune promesse n&apos;est faite : notre équipe vous répond directement.
        </p>
        <div className="mt-12 grid gap-[5px] border-[5px] border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} accent={ACCENTS[index % ACCENTS.length]} />
          ))}
        </div>
      </section>

      {/* 3 — Préparer son séjour */}
      <section aria-labelledby="prep-title" className="border-y-[5px] border-ink bg-mist py-20 sm:py-28">
        <div className="wrap">
          <Eyebrow color="yellow">Préparer son séjour</Eyebrow>
          <h2 id="prep-title" className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Les informations dont vous avez besoin.
          </h2>
          <div className="mt-12 grid gap-[5px] border-[5px] border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICAL_INFO.map((info) => (
              <InfoCard key={info.id} info={info} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Un renseignement ? */}
      <CtaBand
        title="Parlons de votre séjour."
        text="Vous souhaitez connaître les équipements disponibles ou obtenir des précisions avant votre arrivée ? Notre équipe est joignable directement sur WhatsApp."
        buttonLabel="Réservation sur WhatsApp"
      />
    </>
  );
}
