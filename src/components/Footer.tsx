import Link from "next/link";
import { CONTACT, HOTEL_ROOMS_COUNT, LEGAL_LINKS, NAV_LINKS, WHATSAPP_RESERVATION_URL } from "@/config/site";
import { WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";
import { MondrianStrip } from "./Mondrian";

export function Footer() {
  return (
    <footer className="on-dark mt-24 bg-ink text-paper">
      <MondrianStrip className="!h-4 bg-paper" />
      <div className="wrap grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo inverted />
          <p className="mt-6 max-w-md text-paper/75">
            Résidence hôtelière de {HOTEL_ROOMS_COUNT} chambres au cœur de Saly Portudal, au Sénégal. Un séjour à taille
            humaine, dans un univers contemporain inspiré de l&apos;art géométrique de Piet Mondrian.
          </p>
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center gap-3 border-2 border-paper px-5 font-semibold transition-colors hover:bg-paper hover:text-ink"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Écrire sur WhatsApp
            <span className="sr-only"> (ouvre WhatsApp dans un nouvel onglet)</span>
          </a>
        </div>

        <nav aria-label="Pages du site" className="md:col-span-3">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-mond-yellow">Le site</h2>
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center hover:text-mond-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-mond-yellow">Coordonnées</h2>
          <address className="space-y-1 not-italic text-paper/85">
            {CONTACT.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div className="pt-2">{CONTACT.phoneDisplay}</div>
            <div>{CONTACT.email}</div>
          </address>
          {CONTACT.isDemo ? (
            <p className="mt-4 border-l-4 border-mond-yellow pl-3 text-sm text-paper/65">
              Coordonnées de démonstration, à remplacer avant la mise en ligne.
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-paper/20">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-paper/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Le Mondrian — Saly Portudal, Sénégal.</p>
          <ul className="flex flex-wrap gap-x-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
