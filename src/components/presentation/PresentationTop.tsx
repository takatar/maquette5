import { Eyebrow, MondrianComposition } from "@/components/Mondrian";
import { Photo } from "@/components/Photo";

const VALUES = [
  {
    title: "L'esthétique",
    text: "Un univers visuel inspiré des compositions géométriques de Piet Mondrian.",
    bar: "bg-mond-red",
  },
  {
    title: "Le confort",
    text: "Une approche de l'hébergement centrée sur le séjour et les besoins des voyageurs, sans promettre de prestations non vérifiées.",
    bar: "bg-mond-blue",
  },
  {
    title: "La situation",
    text: "Une résidence située au cœur de Saly Portudal, une station balnéaire du Sénégal.",
    bar: "bg-mond-yellow",
  },
];

/** Section 1 — Introduction. */
export function PresentationIntro() {
  return (
    <section aria-labelledby="pres-title" className="border-b-[5px] border-ink">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:col-span-6 lg:py-24 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-14">
          <Eyebrow>Présentation</Eyebrow>
          <h1 id="pres-title" className="rise-in font-display text-5xl leading-[1.05] sm:text-6xl">
            Le Mondrian, une autre vision du séjour à Saly.
          </h1>
          <p className="rise-in rise-in-delay-1 mt-6 max-w-xl text-lg text-ink/80">
            Située au cœur de Saly Portudal, au Sénégal, la résidence hôtelière Le Mondrian propose un univers
            contemporain, marqué par l&apos;équilibre des formes, la simplicité et une identité graphique distinctive.
          </p>
        </div>
        <div className="relative min-h-[22rem] border-t-[5px] border-ink sm:min-h-[30rem] lg:col-span-6 lg:border-l-[5px] lg:border-t-0">
          <Photo id="poolMuralAerial" fit="cover" priority position="30% 40%" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </div>
    </section>
  );
}

/** Section 2 — Notre concept. */
export function PresentationConcept() {
  return (
    <section aria-labelledby="concept-title" className="wrap py-20 sm:py-28">
      <Eyebrow color="blue">Notre concept</Eyebrow>
      <h2 id="concept-title" className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
        L&apos;équilibre dans chaque détail.
      </h2>
      <div className="mt-12 grid gap-[5px] border-[5px] border-ink bg-ink md:grid-cols-3">
        {VALUES.map((value) => (
          <article key={value.title} className="bg-paper p-8 sm:p-10">
            <span aria-hidden="true" className={`mb-8 block h-3 w-14 ${value.bar}`} />
            <h3 className="font-display text-3xl leading-tight">{value.title}</h3>
            <p className="mt-4 text-ink/80">{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Section 3 — L'inspiration Mondrian. */
export function PresentationInspiration() {
  return (
    <section aria-labelledby="inspiration-title" className="border-y-[5px] border-ink bg-mist py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow color="yellow">L&apos;inspiration Mondrian</Eyebrow>
          <h2 id="inspiration-title" className="font-display text-4xl leading-tight sm:text-5xl">
            Quand l&apos;art inspire l&apos;hospitalité.
          </h2>
          <p className="mt-6 text-lg text-ink/80">
            Le nom Le Mondrian fait écho à Piet Mondrian et à sa recherche d&apos;équilibre entre les lignes, les
            formes et les couleurs. Cette inspiration se retrouve dans notre identité visuelle : une composition
            claire, des contrastes affirmés et une attention particulière portée aux détails.
          </p>
          <p className="mt-4 text-sm text-ink/65">
            Cette référence est un hommage artistique : Piet Mondrian n&apos;a ni conçu ni approuvé cet établissement.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-[5px] border-[5px] border-ink bg-ink">
            <div className="col-span-7 aspect-[4/5] overflow-hidden">
              <MondrianComposition className="h-full w-full" />
            </div>
            <div className="relative col-span-5 overflow-hidden bg-paper">
              <Photo id="towerLowAngle" fit="cover" position="50% 35%" sizes="(min-width: 1024px) 24vw, 40vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
