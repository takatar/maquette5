import type { ServiceIconName } from "@/components/Icons";
import type { PhotoId } from "./photos";

/**
 * ============================================================
 *  CONTENUS ÉDITABLES
 * ============================================================
 *  Statuts des services :
 *   - "photo"      : l'élément est visible sur les photographies du dossier `images/`.
 *                    Il est affiché, avec la mention de confirmer le détail par chambre.
 *   - "a-confirmer": aucune information confirmée → AUCUNE promesse n'est faite,
 *                    le visiteur est invité à contacter l'établissement.
 *  Pour confirmer un service, passer son statut à "confirme" (affiche « Confirmé »).
 */

export type ServiceStatus = "confirme" | "photo" | "a-confirmer";

export interface ServiceItem {
  id: string;
  title: string;
  icon: ServiceIconName;
  status: ServiceStatus;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "piscine",
    title: "Piscine",
    icon: "pool",
    status: "photo",
    description:
      "Une piscine est visible dans la cour de la résidence. Contactez-nous pour connaître les conditions d'accès.",
  },
  {
    id: "climatisation",
    title: "Climatisation",
    icon: "snowflake",
    status: "photo",
    description:
      "Un climatiseur mural apparaît sur certaines de nos photos. Demandez-nous quelles chambres en sont équipées.",
  },
  {
    id: "television",
    title: "Télévision",
    icon: "tv",
    status: "photo",
    description: "Un téléviseur mural est visible dans les intérieurs présentés. Détail par chambre sur demande.",
  },
  {
    id: "salle-de-bain",
    title: "Salle d'eau privative",
    icon: "shower",
    status: "photo",
    description:
      "Une salle d'eau avec douche figure parmi nos photographies. Précisions sur chaque chambre auprès de notre équipe.",
  },
  {
    id: "rangements",
    title: "Rangements et espace bureau",
    icon: "wardrobe",
    status: "photo",
    description: "Armoire et plan de travail apparaissent dans plusieurs intérieurs. Confirmation selon la chambre.",
  },
  {
    id: "coin-cuisine",
    title: "Coin cuisine",
    icon: "kitchen",
    status: "photo",
    description:
      "Un coin cuisine équipé est visible dans certains intérieurs. Contactez-nous pour savoir où il est disponible.",
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    icon: "wifi",
    status: "a-confirmer",
    description: "Information à confirmer. Contactez l'établissement pour savoir si une connexion est proposée.",
  },
  {
    id: "stationnement",
    title: "Stationnement",
    icon: "car",
    status: "a-confirmer",
    description: "Information à confirmer. Contactez l'établissement avant votre arrivée.",
  },
  {
    id: "menage",
    title: "Ménage",
    icon: "sparkle",
    status: "a-confirmer",
    description: "Information à confirmer. Notre équipe vous précisera les modalités.",
  },
  {
    id: "linge",
    title: "Linge de lit et de toilette",
    icon: "bed",
    status: "a-confirmer",
    description: "Information à confirmer. Demandez à notre équipe ce qui est fourni.",
  },
  {
    id: "accueil",
    title: "Modalités d'accueil",
    icon: "key",
    status: "a-confirmer",
    description: "Information à confirmer. Contactez-nous pour organiser votre arrivée.",
  },
  {
    id: "conditions",
    title: "Conditions de séjour",
    icon: "file",
    status: "a-confirmer",
    description: "Information à confirmer. Notre équipe vous communique les conditions applicables.",
  },
];

export interface InfoBlock {
  id: string;
  title: string;
  /** `null` = information non confirmée : affichée comme champ à compléter. */
  value: string | null;
}

export const PRACTICAL_INFO: InfoBlock[] = [
  { id: "horaires", title: "Heures d'arrivée et de départ", value: null },
  { id: "reservation", title: "Modalités de réservation", value: null },
  { id: "annulation", title: "Conditions d'annulation", value: null },
  { id: "paiement", title: "Moyens de paiement", value: null },
  { id: "regles", title: "Règles de séjour", value: null },
  { id: "pratique", title: "Informations pratiques", value: null },
];

export interface RoomPreview {
  photo: PhotoId;
  title: string;
  text: string;
  position?: string;
}

/**
 * Aperçus visuels : aucune catégorie, aucun tarif, aucune surface, aucune capacité.
 * Les intitulés décrivent uniquement ce que montre la photographie.
 */
export const ROOM_PREVIEWS: RoomPreview[] = [
  {
    photo: "bedroomOrange",
    title: "Un espace nuit lumineux",
    text: "Un aperçu d'un intérieur de la résidence. Les caractéristiques varient : demandez-nous celles de votre chambre.",
    position: "50% 55%",
  },
  {
    photo: "bathroom",
    title: "Une salle d'eau soignée",
    text: "Des lignes sobres et contrastées, dans l'esprit graphique de la maison.",
    position: "50% 50%",
  },
  {
    photo: "bedroomTwin",
    title: "Des intérieurs fonctionnels",
    text: "Contactez-nous pour connaître la configuration et les équipements de chaque chambre.",
    position: "50% 40%",
  },
  {
    photo: "diningKitchen",
    title: "Des pièces ouvertes sur la cour",
    text: "Des baies vitrées qui laissent entrer la lumière de Saly. Disponibilités et détails sur demande.",
    position: "50% 55%",
  },
];
