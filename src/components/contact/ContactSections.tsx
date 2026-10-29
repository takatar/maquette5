import { ReservationButton } from "@/components/Buttons";
import { Eyebrow, MondrianComposition } from "@/components/Mondrian";
import { Photo } from "@/components/Photo";

/** Section 1 — Introduction. */
export function ContactIntro() {
  return (
    <section aria-labelledby="contact-title" className="wrap py-16 sm:py-24">
      <Eyebrow>Contact</Eyebrow>
      <h1 id="contact-title" className="rise-in font-display text-5xl leading-[1.05] sm:text-6xl">
        Contactez Le Mondrian.
      </h1>
      <p className="rise-in rise-in-delay-1 mt-6 max-w-2xl text-lg text-ink/80">
        Une question, une demande d&apos;information ou un projet de séjour à Saly Portudal ? Contactez notre équipe et
        préparez votre venue au Mondrian.
      </p>
    </section>
  );
}

/** Section 3 — Contact direct par WhatsApp (placé en tête pour être visible immédiatement). */
export function ContactWhatsApp() {
  return (
    <section aria-labelledby="wa-title" className="on-dark wrap pb-20">
      <div className="grid overflow-hidden border-[5px] border-ink bg-ink text-paper md:grid-cols-12">
        <div className="p-8 sm:p-12 md:col-span-8 lg:p-16">
          <span aria-hidden="true" className="mb-8 block h-3 w-20 bg-mond-yellow" />
          <h2 id="wa-title" className="font-display text-4xl leading-tight sm:text-5xl">
            Le plus simple ? Écrivez-nous.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-paper/80">
            Pour obtenir des renseignements sur les chambres, les disponibilités ou les modalités de séjour, contactez
            directement Le Mondrian sur WhatsApp.
          </p>
          <div className="mt-8">
            <ReservationButton label="Réservation sur WhatsApp" size="lg" />
          </div>
          <p className="mt-4 text-sm text-paper/60">
            Aucune réservation n&apos;est confirmée automatiquement : notre équipe répond à votre message.
          </p>
        </div>
        <div className="relative min-h-40 md:col-span-4">
          <MondrianComposition className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}

/** Section 5 — Localisation générale, sans faux marqueur de carte. */
export function ContactLocation() {
  return (
    <section aria-labelledby="loc-title" className="wrap py-20 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Eyebrow color="blue">Localisation</Eyebrow>
          <h2 id="loc-title" className="font-display text-4xl leading-tight sm:text-5xl">
            Saly Portudal, Sénégal.
          </h2>
          <p className="mt-6 text-lg text-ink/80">
            Le Mondrian se situe au cœur de la station balnéaire de Saly Portudal, au Sénégal. L&apos;adresse exacte vous
            est communiquée par notre équipe lors de votre prise de contact.
          </p>
          <p className="mt-4 border-2 border-dashed border-ink/50 p-4 text-sm text-ink/70">
            Aucune carte n&apos;est affichée tant qu&apos;une position fiable n&apos;a pas été fournie : un marqueur
            approximatif pourrait induire les voyageurs en erreur.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden border-[5px] border-ink bg-mist">
            <Photo id="streetFacade" fit="cover" position="55% 50%" sizes="(min-width: 1024px) 46vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cibles des liens du pied de page (contenu juridique à compléter). */
export function LegalSections() {
  return (
    <section aria-label="Informations légales" className="wrap pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        <article id="mentions-legales" className="border-2 border-ink p-6">
          <h2 className="font-display text-2xl">Mentions légales</h2>
          <p className="mt-3 text-sm text-ink/75">
            À compléter avant la mise en ligne : raison sociale, forme juridique, adresse du siège, numéro
            d&apos;immatriculation, directeur de la publication et hébergeur du site.
          </p>
        </article>
        <article id="confidentialite" className="border-2 border-ink p-6">
          <h2 className="font-display text-2xl">Politique de confidentialité</h2>
          <p className="mt-3 text-sm text-ink/75">
            À compléter avant la mise en ligne : données collectées via le formulaire de contact, finalité, durée de
            conservation, droits des personnes et contact pour les exercer. WhatsApp est un service tiers soumis à ses
            propres conditions.
          </p>
        </article>
      </div>
    </section>
  );
}
