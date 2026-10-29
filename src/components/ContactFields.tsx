const SUBJECTS = [
  "Renseignements généraux",
  "Chambres et disponibilités",
  "Services et équipements",
  "Autre demande",
];

const fieldClass =
  "mt-2 block min-h-12 w-full border-2 border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-ink/45";

/** Champs du formulaire de contact (tous correctement libellés). */
export function ContactFields() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="cf-name" className="font-semibold">
            Nom et prénom <span aria-hidden="true">*</span>
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="font-semibold">
            E-mail <span aria-hidden="true">*</span>
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="font-semibold">
            Téléphone <span className="font-normal text-ink/60">(facultatif)</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-subject" className="font-semibold">
            Objet du message <span aria-hidden="true">*</span>
          </label>
          <select id="cf-subject" name="subject" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choisir un objet
            </option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="font-semibold">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea id="cf-message" name="message" rows={6} required className={fieldClass} />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="cf-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-6 w-6 shrink-0 accent-[#1746A2]"
        />
        <label htmlFor="cf-consent" className="text-sm leading-relaxed text-ink/80">
          J&apos;accepte que mes données soient utilisées pour répondre à ma demande. Elles ne servent à aucune autre
          finalité. <span aria-hidden="true">*</span>
        </label>
      </div>
    </>
  );
}
