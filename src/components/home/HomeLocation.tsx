import { Eyebrow } from "@/components/Mondrian";
import { Photo } from "@/components/Photo";
import { CONTACT } from "@/config/site";

/** Section 5 — Localisation. Aucune distance inventée ; carte uniquement si une position fiable existe. */
export function HomeLocation() {
  return (
    <section aria-labelledby="location-title" className="border-y-[5px] border-ink bg-paper">
      <div className="grid lg:grid-cols-12">
        <div className="relative min-h-[22rem] border-b-[5px] border-ink lg:col-span-6 lg:border-b-0 lg:border-r-[5px]">
          <Photo id="streetFacade" fit="cover" position="55% 50%" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:col-span-6 lg:px-16 lg:py-24">
          <Eyebrow color="blue">Localisation</Eyebrow>
          <h2 id="location-title" className="font-display text-4xl leading-tight sm:text-5xl">
            Séjournez au cœur de Saly Portudal.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink/80">
            Découvrez Le Mondrian, une résidence hôtelière située au cœur de la station balnéaire de Saly Portudal, au
            Sénégal.
          </p>

          {/* Emplacement réservé à une carte : à intégrer uniquement avec l'adresse réelle vérifiée. */}
          <div className="mt-8 border-2 border-dashed border-ink/50 p-5 text-sm text-ink/75">
            <p className="font-semibold uppercase tracking-wider">Carte à intégrer</p>
            <p className="mt-1">
              Localisation générale : {CONTACT.locality}. Une carte sera ajoutée une fois l&apos;adresse exacte
              confirmée, afin de ne pas indiquer un emplacement erroné.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
