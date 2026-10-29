import { ButtonLink, ReservationButton } from "@/components/Buttons";
import { RoomCard } from "@/components/Cards";
import { Eyebrow } from "@/components/Mondrian";
import { ROOM_PREVIEWS } from "@/data/content";

/** Section 3 — Les chambres (aucune catégorie, aucun tarif, aucune capacité inventés). */
export function HomeRooms() {
  const [a, b, c, d] = ROOM_PREVIEWS;
  return (
    <section aria-labelledby="rooms-title" className="border-y-[5px] border-ink bg-mist py-20 sm:py-28">
      <div className="wrap">
        <div className="max-w-3xl">
          <Eyebrow color="yellow">Les chambres</Eyebrow>
          <h2 id="rooms-title" className="font-display text-4xl leading-tight sm:text-5xl">
            17 chambres pour vivre votre séjour à votre rythme.
          </h2>
          <p className="mt-6 text-lg text-ink/80">
            Découvrez l&apos;univers du Mondrian et contactez-nous pour connaître les caractéristiques de nos chambres
            ainsi que les disponibilités correspondant à vos dates.
          </p>
        </div>

        <div className="mt-12 grid gap-[5px] border-[5px] border-ink bg-ink md:grid-cols-12">
          <RoomCard
            room={a}
            heightClass="aspect-[4/3] md:aspect-[5/4]"
            sizes="(min-width: 768px) 55vw, 100vw"
            className="md:col-span-7"
          />
          <RoomCard
            room={b}
            heightClass="aspect-[4/3] md:aspect-[3/4]"
            sizes="(min-width: 768px) 38vw, 100vw"
            className="md:col-span-5"
          />
          <RoomCard
            room={c}
            heightClass="aspect-[4/3]"
            sizes="(min-width: 768px) 38vw, 100vw"
            className="md:col-span-5"
          />
          <RoomCard
            room={d}
            heightClass="aspect-[4/3] md:aspect-[5/4]"
            sizes="(min-width: 768px) 55vw, 100vw"
            className="md:col-span-7"
          />
        </div>

        <p className="mt-6 text-sm text-ink/65">
          Photographies de la résidence à titre d&apos;illustration : les équipements et la configuration varient selon
          les chambres.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/services" variant="dark" size="lg">
            Découvrir les services
          </ButtonLink>
          <ReservationButton label="Réserver sur WhatsApp" size="lg" />
        </div>
      </div>
    </section>
  );
}
