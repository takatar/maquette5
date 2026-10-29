import type { ReactNode } from "react";

/** Petit rectangle de couleur utilisé comme puce graphique. */
export function Swatch({ color }: { color: "red" | "blue" | "yellow" | "ink" }) {
  const map = { red: "bg-mond-red", blue: "bg-mond-blue", yellow: "bg-mond-yellow", ink: "bg-ink" } as const;
  return <span aria-hidden="true" className={`inline-block h-3 w-3 ${map[color]}`} />;
}

export function Eyebrow({
  children,
  color = "red",
  className = "",
}: {
  children: ReactNode;
  color?: "red" | "blue" | "yellow";
  className?: string;
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${className}`}
    >
      <Swatch color={color} />
      {children}
    </p>
  );
}

/** Grille à lignes noires : le conteneur est noir, les cellules « flottent » avec un filet de 5 px. */
export function LineGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grid gap-[5px] border-[5px] border-ink bg-ink ${className}`}>{children}</div>;
}

/**
 * Composition originale en SVG : lignes noires, rectangles blancs, accents rouge / bleu / jaune.
 * Création libre, inspirée de l'esprit de Mondrian, qui ne reproduit aucune toile.
 */
export function MondrianComposition({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
      role="img"
      aria-label="Composition graphique originale : lignes noires, rectangles blancs et accents rouge, bleu et jaune"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="320" fill="#151515" />
      {/* rangée haute */}
      <rect x="5" y="5" width="165" height="190" fill="#F7F6F2" />
      <rect x="175" y="5" width="130" height="95" fill="#D92727" />
      <rect x="310" y="5" width="85" height="95" fill="#F7F6F2" />
      {/* rangée centrale */}
      <rect x="175" y="105" width="75" height="90" fill="#F7F6F2" />
      <rect x="255" y="105" width="140" height="90" fill="#E7E5DF" />
      {/* rangée basse */}
      <rect x="5" y="200" width="70" height="115" fill="#1746A2" />
      <rect x="80" y="200" width="125" height="52" fill="#F7F6F2" />
      <rect x="80" y="257" width="125" height="58" fill="#F7F6F2" />
      <rect x="210" y="200" width="185" height="115" fill="#F7F6F2" />
      <rect x="338" y="257" width="57" height="58" fill="#F2C230" />
    </svg>
  );
}

/** Bandeau de petits rectangles pour le pied de page et les séparateurs. */
export function MondrianStrip({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-3 w-full gap-[3px] bg-ink ${className}`}>
      <span className="flex-[5] bg-paper" />
      <span className="flex-[2] bg-mond-red" />
      <span className="flex-[4] bg-paper" />
      <span className="flex-[1.5] bg-mond-blue" />
      <span className="flex-[3] bg-paper" />
      <span className="flex-[1.2] bg-mond-yellow" />
    </div>
  );
}
