import type { InfoBlock, RoomPreview, ServiceItem, ServiceStatus } from "@/data/content";
import { ServiceIcon } from "./Icons";
import { Photo } from "./Photo";

const STATUS_LABEL: Record<ServiceStatus, string> = {
  confirme: "Confirmé",
  photo: "Visible sur nos photos",
  "a-confirmer": "À confirmer",
};

const STATUS_STYLE: Record<ServiceStatus, string> = {
  confirme: "bg-mond-blue text-white",
  photo: "bg-mond-yellow text-ink",
  "a-confirmer": "bg-mist text-ink",
};

export function ServiceCard({ service, accent }: { service: ServiceItem; accent: string }) {
  return (
    <article className="relative flex h-full flex-col bg-paper p-6 sm:p-7">
      <span aria-hidden="true" className={`absolute right-0 top-0 h-5 w-9 ${accent}`} />
      <ServiceIcon name={service.icon} className="h-9 w-9 text-ink" />
      <h3 className="mt-5 font-display text-2xl leading-tight">{service.title}</h3>
      <p className="mt-3 flex-1 text-[0.97rem] text-ink/80">{service.description}</p>
      <p
        className={`mt-5 inline-flex w-fit px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${STATUS_STYLE[service.status]}`}
      >
        {STATUS_LABEL[service.status]}
      </p>
    </article>
  );
}

export function RoomCard({
  room,
  sizes,
  heightClass,
  className = "",
}: {
  room: RoomPreview;
  sizes: string;
  heightClass: string;
  className?: string;
}) {
  return (
    <article className={`flex flex-col bg-paper ${className}`}>
      <div className={`relative w-full overflow-hidden bg-mist ${heightClass}`}>
        <Photo id={room.photo} fit="cover" sizes={sizes} position={room.position} />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl leading-tight">{room.title}</h3>
        <p className="mt-2 text-[0.97rem] text-ink/80">{room.text}</p>
      </div>
    </article>
  );
}

export function InfoCard({ info }: { info: InfoBlock }) {
  return (
    <article className="bg-paper p-6">
      <h3 className="font-display text-xl leading-tight">{info.title}</h3>
      {info.value ? (
        <p className="mt-3 text-ink/80">{info.value}</p>
      ) : (
        <p className="mt-3 border-2 border-dashed border-ink/40 p-3 text-sm text-ink/70">
          <span className="font-semibold uppercase tracking-wider">À compléter avant la mise en ligne.</span>
          <br />
          En attendant, notre équipe vous renseigne directement sur WhatsApp.
        </p>
      )}
    </article>
  );
}
