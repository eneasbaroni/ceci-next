'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Evento } from '../types'

interface EventDetailProps {
  evento: Evento | null
  onClose: () => void
}

export function EventDetail({ evento, onClose }: EventDetailProps) {
  // cerrar con Escape, y bloquear el scroll del body mientras está abierto
  useEffect(() => {
    if (!evento) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [evento, onClose])

  const isOpen = evento !== null

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-neutral-900/40" onClick={onClose} />

      {/* panel: full-screen en mobile, slide-over parcial en desktop */}
      <div
        className={`absolute right-0 top-0 h-full w-full overflow-y-auto bg-white shadow-xl transition-transform duration-300 md:w-[560px] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={evento?.titulo}
      >
        {evento && (
          <>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 backdrop-blur-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {evento.fotos[0] && (
                <Image
                  src={evento.fotos[0]}
                  alt={evento.titulo}
                  fill
                  className="object-cover"
                  sizes="560px"
                />
              )}
              <div className="absolute left-5 top-5 rounded-md bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-xs font-medium tracking-wide text-white">
                  {evento.fechaDisplay}
                </span>
              </div>
            </div>

            <div className="px-6 py-8 md:px-8">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                {evento.rol}
              </p>
              <h2 className="mt-2 text-2xl font-medium leading-snug text-[#968ab9]">
                {evento.titulo}
              </h2>
              <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-[#968ab9] font-light">
                {evento.descripcion}
              </p>

              {evento.fotos.length > 1 && (
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {evento.fotos.slice(1).map((foto, i) => (
                    <div
                      key={foto}
                      className="relative aspect-[4/3] overflow-hidden rounded-md"
                    >
                      <Image
                        src={foto}
                        alt={`${evento.titulo} - foto ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
