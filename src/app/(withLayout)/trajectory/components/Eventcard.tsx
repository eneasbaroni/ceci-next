import Image from 'next/image'
import { Evento } from '../types'

interface EventCardProps {
  evento: Evento
  onVerMas: (evento: Evento) => void
  /** ángulo de rotación del sello, distinto por card para que no se sientan repetidas */
  selloRotation?: number
}

export function EventCard({
  evento,
  onVerMas,
  selloRotation = 0,
}: EventCardProps) {
  const fotoPrincipal = evento.fotos[0]

  return (
    <article className="w-[300px] overflow-hidden rounded-[50rem] border border-[rgb(253,173,173,0.5)] bg-white pb-16 relative">
      <div className="relative aspect-[4/3] w-full ">
        {fotoPrincipal && (
          <Image
            src={fotoPrincipal}
            alt={evento.titulo}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        )}

        <div className="absolute left-4 bottom-4 rounded-md bg-white/10 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-xs font-medium tracking-wide text-white">
            {evento.fechaDisplay}
          </span>
        </div>

        <div
          className="absolute -bottom-3.5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(253,173,173)] text-lg text-white"
          style={{ transform: `rotate(${selloRotation}deg)` }}
          aria-hidden="true"
        >
          ✹
        </div>
      </div>

      <div className="px-5 pb-5 pt-7">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
          {evento.rol}
        </p>
        <h3 className="mt-2 text-base font-medium leading-snug text-neutral-900">
          {evento.titulo}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {evento.excerpt}
        </p>
        <button
          onClick={() => onVerMas(evento)}
          className="absolute bottom-4 right-1/2 translate-x-1/2 flex items-center gap-1.5 text-sm font-medium text-[#968ab9] transition-opacity hover:opacity-70 font-moneta uppercase"
        >
          ver más
        </button>
      </div>
    </article>
  )
}
