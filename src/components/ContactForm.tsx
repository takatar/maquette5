"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppUrl, CONTACT_FORM_ENDPOINT, HOTEL_NAME } from "@/config/site";
import { buttonClasses } from "./Buttons";
import { ContactFields } from "./ContactFields";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string }
  | { kind: "whatsapp" };

/**
 * Formulaire de contact général (distinct de la réservation, qui se fait sur WhatsApp).
 * - Si CONTACT_FORM_ENDPOINT est configuré : envoi réel ; la confirmation n'apparaît que si le service répond OK.
 * - Sinon : aucun envoi n'est simulé. Le message est préparé dans WhatsApp, que le visiteur envoie lui-même.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (!CONTACT_FORM_ENDPOINT) {
      const lines = [
        `Bonjour ${HOTEL_NAME},`,
        "",
        `Objet : ${values.subject}`,
        values.message,
        "",
        values.name,
        `E-mail : ${values.email}`,
      ];
      if (values.phone) lines.push(`Téléphone : ${values.phone}`);
      window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
      setStatus({ kind: "whatsapp" });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({
        kind: "error",
        message:
          "Votre message n'a pas pu être envoyé. Veuillez réessayer ou nous écrire directement sur WhatsApp.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" aria-describedby="form-note">
      <ContactFields />

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className={buttonClasses("dark", "lg", "w-full disabled:opacity-60 sm:w-auto")}
      >
        {status.kind === "sending" ? "Envoi en cours…" : "Envoyer mon message"}
      </button>

      <p id="form-note" className="text-sm text-ink/65">
        Ce formulaire est réservé aux demandes générales ; il ne permet pas de réserver. Pour une réservation, utilisez
        le bouton WhatsApp.
        {CONTACT_FORM_ENDPOINT
          ? ""
          : " Aucun service d'envoi n'est encore connecté : votre message est préparé dans WhatsApp et n'est transmis que lorsque vous l'envoyez depuis WhatsApp."}
      </p>

      <div role="status" aria-live="polite">
        {status.kind === "sent" ? (
          <p className="border-l-4 border-mond-blue bg-white p-4 font-semibold">
            Merci, votre message a bien été transmis.
          </p>
        ) : null}
        {status.kind === "whatsapp" ? (
          <p className="border-l-4 border-mond-yellow bg-white p-4">
            WhatsApp a été ouvert avec votre message prérempli. <strong>Il n&apos;est pas encore envoyé</strong> :
            appuyez sur « Envoyer » dans WhatsApp pour le transmettre à l&apos;établissement.
          </p>
        ) : null}
        {status.kind === "error" ? (
          <p role="alert" className="border-l-4 border-mond-red bg-white p-4 font-semibold">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
