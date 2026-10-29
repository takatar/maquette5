/**
 * ============================================================
 *  CONFIGURATION CENTRALISÉE — LE MONDRIAN
 * ============================================================
 *  Tout ce qui doit être remplacé avant la mise en ligne se trouve ici :
 *  numéro WhatsApp, coordonnées, URL du site.
 *  Les coordonnées ci-dessous sont des données de DÉMONSTRATION.
 */

export const HOTEL_NAME = "Le Mondrian";
export const HOTEL_ROOMS_COUNT = 17;
export const HOTEL_LOCATION = "Saly Portudal, Sénégal";

/** URL publique du site (utilisée pour les métadonnées / URL canoniques). */
export const SITE_URL = "https://maquette5.immed-ia.com";

/**
 * Numéro WhatsApp de réservation (FICTIF — démonstration).
 * Format : indicatif pays + numéro, chiffres uniquement, sans espace ni « + ».
 */
export const WHATSAPP_NUMBER = "221771234567";

export const RESERVATION_MESSAGE =
  "Bonjour Le Mondrian, je souhaite obtenir des informations sur les disponibilités et les modalités de réservation de votre résidence à Saly Portudal. Pourriez-vous m'aider à préparer mon séjour ?";

export function buildWhatsAppUrl(message: string, number: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Lien unique utilisé par TOUS les boutons « Réservation » du site. */
export const WHATSAPP_RESERVATION_URL = buildWhatsAppUrl(RESERVATION_MESSAGE);

/**
 * Coordonnées de démonstration.
 * Passer `isDemo` à `false` une fois les vraies coordonnées renseignées :
 * l'avertissement disparaît et le téléphone / l'e-mail deviennent cliquables.
 */
export const CONTACT = {
  isDemo: true,
  name: "Le Mondrian",
  addressLines: ["Route de Saly, quartier central", "Saly Portudal, Mbour", "Sénégal"],
  phoneDisplay: "+221 77 123 45 67",
  phoneTel: "+221771234567",
  email: "contact@lemondrian-saly.example",
  locality: "Saly Portudal, Sénégal",
} as const;

/**
 * Point d'envoi du formulaire de contact (service e-mail, Formspree, API maison…).
 * Tant que la valeur est `null`, le formulaire n'envoie rien par lui-même :
 * il ouvre WhatsApp avec le message prérempli et ne simule aucune confirmation d'envoi.
 */
export const CONTACT_FORM_ENDPOINT: string | null = null;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/presentation", label: "Présentation" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/contact#mentions-legales", label: "Mentions légales" },
  { href: "/contact#confidentialite", label: "Politique de confidentialité" },
] as const;
