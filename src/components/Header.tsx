"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/config/site";
import { ReservationButton } from "./Buttons";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Referme le menu mobile à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Échap ferme le menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="wrap flex min-h-[4.25rem] items-center justify-between gap-2 !px-4 sm:gap-3 sm:!px-8">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center px-4 text-sm font-semibold tracking-wide transition-colors hover:text-mond-red ${
                    isActive(link.href) ? "text-ink" : "text-ink/75"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) ? (
                    <span aria-hidden="true" className="absolute inset-x-4 -bottom-[1px] h-[3px] bg-mond-red" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ReservationButton size="sm" className="!px-3 !gap-1.5 sm:min-h-12 sm:!px-5 sm:!gap-2.5 sm:text-[0.95rem]" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navigation mobile"
        hidden={!open}
        className="border-t-[3px] border-ink bg-paper lg:hidden"
      >
        <ul className="wrap grid py-2">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href} className="border-b border-ink/15 last:border-b-0">
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="flex min-h-14 items-center justify-between font-display text-2xl"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className={`h-3 w-3 ${["bg-mond-red", "bg-mond-blue", "bg-mond-yellow", "bg-ink"][index]}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
