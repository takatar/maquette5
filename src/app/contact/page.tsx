import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact/ContactDetails";
import {
  ContactIntro,
  ContactLocation,
  ContactWhatsApp,
  LegalSections,
} from "@/components/contact/ContactSections";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact et réservation WhatsApp | Le Mondrian",
  description:
    "Contactez Le Mondrian, résidence hôtelière à Saly Portudal (Sénégal) : renseignements et réservation directement sur WhatsApp.",
  path: "/contact",
  image: "streetFacadePortrait",
});

export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactWhatsApp />

      <section aria-labelledby="coords-title" className="border-y-[5px] border-ink bg-mist py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="coords-title" className="font-display text-4xl leading-tight">
              Coordonnées
            </h2>
            <div className="mt-8">
              <ContactDetails />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl leading-tight">Un message général ?</h2>
            <p className="mt-4 max-w-xl text-ink/75">
              Pour une demande d&apos;information non liée à un séjour précis. Ce formulaire n&apos;est pas un outil de
              réservation.
            </p>
            <div className="mt-8 border-[5px] border-ink bg-paper p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactLocation />
      <LegalSections />
    </>
  );
}
