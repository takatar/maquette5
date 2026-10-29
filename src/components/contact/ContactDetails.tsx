import { CONTACT } from "@/config/site";

const labelClass = "text-xs font-semibold uppercase tracking-[0.2em] text-ink/60";

/** Coordonnées : téléphone et e-mail ne deviennent cliquables qu'une fois CONTACT.isDemo = false. */
export function ContactDetails() {
  return (
    <div className="border-[5px] border-ink bg-paper p-6 sm:p-8">
      <address className="space-y-5 not-italic">
        <div>
          <p className={labelClass}>Établissement</p>
          <p className="mt-1 text-lg font-semibold">{CONTACT.name}</p>
        </div>
        <div>
          <p className={labelClass}>Adresse</p>
          <p className="mt-1">
            {CONTACT.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className={labelClass}>Téléphone</p>
          <p className="mt-1">
            {CONTACT.isDemo ? (
              CONTACT.phoneDisplay
            ) : (
              <a href={`tel:${CONTACT.phoneTel}`} className="underline underline-offset-4">
                {CONTACT.phoneDisplay}
              </a>
            )}
          </p>
        </div>
        <div>
          <p className={labelClass}>E-mail</p>
          <p className="mt-1 break-all">
            {CONTACT.isDemo ? (
              CONTACT.email
            ) : (
              <a href={`mailto:${CONTACT.email}`} className="underline underline-offset-4">
                {CONTACT.email}
              </a>
            )}
          </p>
        </div>
        <div>
          <p className={labelClass}>Localisation</p>
          <p className="mt-1">{CONTACT.locality}</p>
        </div>
      </address>
      {CONTACT.isDemo ? (
        <p className="mt-6 border-l-4 border-mond-red bg-mist p-3 text-sm">
          <strong>Coordonnées de démonstration.</strong> Adresse, téléphone et e-mail sont fictifs et devront être
          remplacés avant la publication. L&apos;adresse e-mail en « .example » n&apos;est pas opérationnelle.
        </p>
      ) : null}
    </div>
  );
}
