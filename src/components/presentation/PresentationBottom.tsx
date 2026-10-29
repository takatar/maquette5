import { ButtonLink, ReservationButton } from "@/components/Buttons";
import { Eyebrow } from "@/components/Mondrian";
import { Photo } from "@/components/Photo";

/** Section 4 — Une résidence de 17 chambres. */
export function PresentationFormat() {
  return (
    <section aria-labelledby="format-title" className="wrap py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <div className="grid grid-cols-2 gap-[5px] border-[5px] border-ink bg-ink">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Photo id="courtyardBalconies" fit="cover" position="40% 50%" sizes="(min-width: 1024px) 24vw, 50vw" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Photo id="staircaseDetail" fit="cover" sizes="(min-width: 1024px) 24vw, 50vw" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-8">
          <Eyebrow>17 chambres</Eyebrow>
          <h2 id="format-title" className="font-display text-4xl leading-tight sm:text-5xl">
            Un format à taille humaine.
          </h2>
          <p className="mt-6 text-lg text-ink/80">
            Le Mondrian compte 17 chambres et accueille les voyageurs dans une résidence hôtelière au cœur de Saly
            Portudal. Pour connaître les caractéristiques des chambres et les possibilités de séjour, contactez
            directement notre équipe.
          </p>
          <div className="mt-8">
            <ReservationButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section 5 — Conclusion. */
export function PresentationWelcome() {
  return (
    <section aria-labelledby="welcome-title" className="on-dark border-t-[5px] border-ink bg-ink text-paper">
      <div className="wrap flex flex-col items-start gap-8 py-20 sm:py-24 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="welcome-title" className="font-display text-4xl leading-tight sm:text-5xl">
            Bienvenue dans l&apos;univers du Mondrian.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-paper/80">
            Découvrez notre résidence et préparez votre prochain séjour à Saly.
          </p>
        </div>
        <ButtonLink href="/contact" variant="yellow" size="lg">
          Nous contacter
        </ButtonLink>
      </div>
    </section>
  );
}
