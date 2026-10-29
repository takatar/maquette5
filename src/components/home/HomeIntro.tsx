import { ButtonLink } from "@/components/Buttons";
import { Eyebrow } from "@/components/Mondrian";
import { Photo } from "@/components/Photo";

/** Section 2 — Présentation de la résidence. */
export function HomeIntro() {
  return (
    <section aria-labelledby="intro-title" className="wrap py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow color="blue">La résidence</Eyebrow>
          <h2 id="intro-title" className="font-display text-4xl leading-tight sm:text-5xl">
            Une adresse singulière au cœur de Saly.
          </h2>
          <p className="mt-6 text-lg text-ink/80">
            Pensé comme un lieu de séjour à l&apos;identité affirmée, Le Mondrian associe une esthétique contemporaine à
            une approche simple et accueillante de l&apos;hospitalité. Ses 17 chambres en font une résidence à taille
            humaine, située au cœur de l&apos;une des destinations balnéaires les plus connues du Sénégal.
          </p>
          <div className="mt-8">
            <ButtonLink href="/presentation" variant="outline">
              En savoir plus
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 items-end gap-[5px] border-[5px] border-ink bg-ink">
            <div className="relative col-span-7 aspect-[3/4] overflow-hidden bg-mist">
              <Photo id="towerLowAngle" fit="cover" sizes="(min-width: 1024px) 34vw, 60vw" />
            </div>
            <div className="col-span-5 grid h-full grid-rows-[2fr_1fr_3fr] gap-[5px]">
              <div className="relative overflow-hidden bg-mist">
                <Photo id="courtyardColumn" fit="cover" position="70% 40%" sizes="(min-width: 1024px) 24vw, 40vw" />
              </div>
              <span className="bg-mond-yellow" aria-hidden="true" />
              <div className="relative overflow-hidden bg-mist">
                <Photo id="poolBuilding" fit="cover" position="50% 40%" sizes="(min-width: 1024px) 24vw, 40vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
