import { Eyebrow } from "@/components/Mondrian";

/** Section 4 — L'expérience Le Mondrian : trois blocs en grille géométrique asymétrique. */
export function HomeExperience() {
  return (
    <section aria-labelledby="experience-title" className="wrap py-20 sm:py-28">
      <Eyebrow color="red">L&apos;expérience Le Mondrian</Eyebrow>
      <h2 id="experience-title" className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
        Trois lignes directrices, une même harmonie.
      </h2>

      <div className="mt-12 grid gap-[5px] border-[5px] border-ink bg-ink md:grid-cols-12 md:grid-rows-[auto_auto]">
        <article className="relative bg-mond-red p-8 text-white md:col-span-7 md:row-span-2 md:flex md:flex-col md:justify-end md:p-12 md:min-h-[26rem]">
          <span aria-hidden="true" className="mb-8 block h-3 w-16 bg-paper md:mb-auto" />
          <h3 className="font-display text-3xl leading-tight sm:text-4xl">Une identité singulière</h3>
          <p className="mt-4 max-w-md text-lg text-white/95">
            Un univers visuel inspiré de l&apos;équilibre des formes et des lignes.
          </p>
        </article>

        <article className="bg-paper p-8 md:col-span-5 md:p-10">
          <span aria-hidden="true" className="mb-6 block h-3 w-12 bg-mond-blue" />
          <h3 className="font-display text-2xl leading-tight sm:text-3xl">Une résidence à taille humaine</h3>
          <p className="mt-3 text-ink/80">17 chambres pour accueillir les voyageurs dans un cadre contemporain.</p>
        </article>

        <article className="bg-mond-yellow p-8 md:col-span-5 md:p-10">
          <span aria-hidden="true" className="mb-6 block h-3 w-12 bg-ink" />
          <h3 className="font-display text-2xl leading-tight sm:text-3xl">Une adresse à Saly Portudal</h3>
          <p className="mt-3 text-ink/90">
            Une situation au cœur de la station balnéaire pour profiter de votre séjour au Sénégal.
          </p>
        </article>
      </div>
    </section>
  );
}
