import { WHATSAPP_RESERVATION_URL } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

/** Bouton WhatsApp flottant (bas droite) — même lien que tous les boutons de réservation. */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_RESERVATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire au Mondrian sur WhatsApp (ouvre WhatsApp dans un nouvel onglet)"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center border-2 border-ink bg-[#25D366] text-ink shadow-[4px_4px_0_0_#151515] transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
      style={{
        marginBottom: "env(safe-area-inset-bottom)",
        marginRight: "env(safe-area-inset-right)",
      }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
