import Link from "next/link";
import type { ReactNode } from "react";
import { WHATSAPP_RESERVATION_URL } from "@/config/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

type Variant = "red" | "dark" | "yellow" | "light" | "outline";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  red: "bg-mond-red text-white border-mond-red hover:bg-ink hover:border-ink",
  dark: "bg-ink text-paper border-ink hover:bg-mond-blue hover:border-mond-blue",
  yellow: "bg-mond-yellow text-ink border-mond-yellow hover:bg-paper hover:border-paper",
  light: "bg-paper text-ink border-paper hover:bg-mond-yellow hover:border-mond-yellow",
  outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
};

const SIZES: Record<Size, string> = {
  sm: "min-h-11 px-3.5 text-sm gap-2",
  md: "min-h-12 px-5 text-[0.95rem] gap-2.5",
  lg: "min-h-14 px-7 text-base gap-3",
};

export function buttonClasses(variant: Variant = "dark", size: Size = "md", extra = ""): string {
  return `inline-flex items-center justify-center whitespace-nowrap border-2 font-semibold tracking-wide transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${extra}`;
}

interface ReservationButtonProps {
  /** Libellé visible. Par défaut : « Réservation ». */
  label?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

/**
 * Bouton de réservation — TOUS les boutons de réservation du site passent par ce composant
 * et ouvrent la même conversation WhatsApp (lien centralisé dans src/config/site.ts).
 * L'ouverture de WhatsApp n'est qu'une prise de contact : aucune réservation n'est confirmée.
 */
export function ReservationButton({
  label = "Réservation",
  variant = "red",
  size = "md",
  className = "",
}: ReservationButtonProps) {
  return (
    <a
      href={WHATSAPP_RESERVATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, size, className)}
    >
      <WhatsAppIcon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      <span>{label}</span>
      <span className="sr-only"> (ouvre WhatsApp dans un nouvel onglet)</span>
    </a>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "dark",
  size = "md",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      <span>{children}</span>
      {arrow ? <ArrowIcon className="h-5 w-5" /> : null}
    </Link>
  );
}
