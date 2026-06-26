'use client'

import { useState } from 'react'
import { Evento } from '../types'
import { EventCard } from './Eventcard'
import { EventDetail } from './Eventdetail'

interface EventGridProps {
  eventos: Evento[]
}

// ángulos fijos para que el sello rote distinto en cada card sin ser random
// (random en cada render causaría un "salto" visual al re-renderizar)
const ROTATIONS = [-6, 8, -4, 5, -8, 4]

export function EventGrid({ eventos }: EventGridProps) {
  const [eventoActivo, setEventoActivo] = useState<Evento | null>(null)

  return (
    <>
      <div className="flex flex-wrap gap-7 justify-center">
        {eventos.map((evento, i) => (
          <EventCard
            key={evento.id}
            evento={evento}
            onVerMas={setEventoActivo}
            selloRotation={ROTATIONS[i % ROTATIONS.length]}
          />
        ))}
      </div>

      <EventDetail
        evento={eventoActivo}
        onClose={() => setEventoActivo(null)}
      />
    </>
  )
}
