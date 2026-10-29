import { ButtonLink, ReservationButton } from "@/components/Buttons";
import { Eyebrow } from "@/components/Mondrian";
import { Photo } from "@/components/Photo";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="border-b-[5px] border-ink">
      <div className="hero-min grid lg:grid-cols-12">
        {/* Colonne texte */}
        <div className="relative order-2 flex flex-col justify-center gap-8 bg-paper px-5 py-12 sm:px-10 lg:order-1 lg:col-span-5 lg:py-16 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-6">
          <div>
            <Eyebrow>Résidence hôtelière · Saly Portudal</Eyebrow>
            <h1
              id="hero-title"
              className="rise-in font-display text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]"
            >
              L&apos;art de séjourner à Saly.
            </h1>
          </div>
          <p className="rise-in rise-in-delay-1 max-w-xl text-lg text-ink/80">
            Au cœur de Saly Portudal, Le Mondrian vous accueille dans une résidence hôtelière de 17 chambres où
            l&apos;élégance contemporaine rencontre l&apos;esprit de la côte sénégalaise.
          </p>
          <div className="rise-in rise-in-delay-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/presentation" variant="dark" size="lg">
              Découvrir la résidence
            </ButtonLink>
            <ReservationButton size="lg" />
          </div>
          <div
            aria-hidden="true"
            className="mt-2 hidden h-5 w-full max-w-sm gap-[3px] border-[3px] border-ink bg-ink lg:flex"
          >
            <span className="flex-[4] bg-mist" />
            <span className="flex-[1.5] bg-mond-red" />
            <span className="flex-[3] bg-mist" />
            <span className="flex-[1] bg-mond-yellow" />
          </div>
        </div>

        {/* Colonne image, composée en grille asymétrique */}
        <div className="order-1 grid grid-cols-[1fr_auto] gap-[5px] bg-ink lg:order-2 lg:col-span-7 lg:grid-cols-[1fr_5.5rem] lg:grid-rows-[1fr_5.5rem] lg:border-l-[5px] lg:border-ink">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist lg:row-span-1 lg:aspect-auto lg:min-h-[30rem]">
            <Photo
              id="poolMuralSide"
              fit="cover"
              priority
              position="40% 50%"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <div className="grid w-10 grid-rows-[3fr_1fr_2fr] gap-[5px] sm:w-16 lg:w-auto">
            <span className="bg-mond-yellow" aria-hidden="true" />
            <span className="bg-paper" aria-hidden="true" />
            <span className="bg-mond-blue" aria-hidden="true" />
          </div>
          <div className="col-span-2 grid h-8 grid-cols-[3fr_1fr_2fr] gap-[5px] sm:h-12 lg:h-auto">
            <span className="bg-mond-red" aria-hidden="true" />
            <span className="bg-paper" aria-hidden="true" />
            <span className="bg-paper" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
