import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export type ServiceIconName =
  | "pool"
  | "snowflake"
  | "tv"
  | "shower"
  | "wardrobe"
  | "kitchen"
  | "wifi"
  | "car"
  | "sparkle"
  | "bed"
  | "key"
  | "file";

const PATHS: Record<ServiceIconName, string[]> = {
  pool: ["M8 3v9M16 3v9M8 6h8M8 9h8", "M2 16c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5", "M2 20c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"],
  snowflake: ["M12 2v20", "M4 7l16 10", "M20 7L4 17", "M9 3.5l3 2.5 3-2.5", "M9 20.5l3-2.5 3 2.5"],
  tv: ["M3 5h18v12H3z", "M8 21h8", "M12 17v4"],
  shower: ["M4 21V9a5 5 0 0 1 5-5h3", "M12 4a6 6 0 0 1 6 6H8", "M10 14v1M14 14v1M18 14v1M12 18v1M16 18v1"],
  wardrobe: ["M5 2h14v20H5z", "M12 2v20", "M9.5 11v2.5M14.5 11v2.5", "M7 22v0M17 22v0"],
  kitchen: ["M4 3h16v18H4z", "M4 10h16", "M9 6.5h.01M15 6.5h.01", "M8 14h8v4H8z"],
  wifi: ["M2 8.8a15 15 0 0 1 20 0", "M5 12.5a10 10 0 0 1 14 0", "M8.5 16a5 5 0 0 1 7 0", "M12 20h.01"],
  car: ["M3 16v-5l2-5h14l2 5v5z", "M3 11h18", "M6 16v3M18 16v3", "M7 13.5h.01M17 13.5h.01"],
  sparkle: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z", "M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z"],
  bed: ["M3 19V5", "M3 15h18v4", "M21 15v-3a3 3 0 0 0-3-3h-7v6", "M7 11.5h.01"],
  key: ["M8 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z", "M11.2 12.8L20 4", "M16 8l3 3"],
  file: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 13h7M9 17h7"],
};

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
