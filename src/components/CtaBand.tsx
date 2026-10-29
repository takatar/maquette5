import { ReservationButton } from "./Buttons";
import { MondrianComposition } from "./Mondrian";

interface CtaBandProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
}

/** Appel à l'action final : fond sombre, détail graphique, bouton WhatsApp. */
export function CtaBand({
  title = "Votre séjour à Saly commence ici.",
  text = "Une question sur nos chambres ou sur les disponibilités ? Contactez directement Le Mondrian sur WhatsApp.",
  buttonLabel = "Réservation",
}: CtaBandProps) {
  return (
    <section aria-labelledby="cta-title" className="on-dark wrap py-20 sm:py-28">
      <div className="grid overflow-hidden border-[5px] border-ink bg-ink text-paper md:grid-cols-12">
        <div className="p-8 sm:p-12 md:col-span-7 lg:p-16">
          <span aria-hidden="true" className="mb-8 block h-3 w-20 bg-mond-yellow" />
          <h2 id="cta-title" className="font-display text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-paper/80">{text}</p>
          <div className="mt-8">
            <ReservationButton label={buttonLabel} size="lg" variant="red" />
          </div>
          <p className="mt-4 text-sm text-paper/60">
            L&apos;ouverture de WhatsApp est une prise de contact : la disponibilité est confirmée par notre équipe.
          </p>
        </div>
        <div className="relative min-h-48 md:col-span-5">
          <MondrianComposition className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
