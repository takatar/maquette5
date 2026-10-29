import Link from "next/link";
import { HOTEL_NAME } from "@/config/site";

/** Petit signe géométrique : lignes noires + rectangles colorés (création originale). */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect width="40" height="40" fill="#151515" />
      <rect x="3" y="3" width="15" height="17" fill="#D92727" />
      <rect x="21" y="3" width="16" height="8" fill="#F7F6F2" />
      <rect x="21" y="14" width="16" height="6" fill="#1746A2" />
      <rect x="3" y="23" width="9" height="14" fill="#F7F6F2" />
      <rect x="15" y="23" width="6" height="14" fill="#F2C230" />
      <rect x="24" y="23" width="13" height="14" fill="#F7F6F2" />
    </svg>
  );
}

export function Logo({ inverted = false, className = "" }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${HOTEL_NAME} — Accueil`}
      className={`inline-flex items-center gap-2 sm:gap-3 ${inverted ? "text-paper" : "text-ink"} ${className}`}
    >
      <LogoMark className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" />
      <span className="font-display text-[0.95rem] leading-none tracking-[0.06em] min-[400px]:text-lg min-[400px]:tracking-[0.1em] sm:text-2xl sm:tracking-[0.12em]">
        LE MONDRIAN
      </span>
    </Link>
  );
}
