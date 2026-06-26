import { Metadata } from 'next'
import Image from 'next/image'
import trayectoriaData from '../../../data/events.json'
import { EventGrid } from './components/Eventgrid'
import { TrayectoriaData } from './types'

export const metadata: Metadata = {
  title: 'Cecilia Torres - Trayectoria',
  description: 'Cecilia Torres-Tanatóloga',
}

export default function TrayectoriaPage() {
  const data = trayectoriaData as TrayectoriaData

  // más reciente primero; los eventos sin fecha real quedan al final
  const eventosOrdenados = [...data.eventos].sort((a, b) =>
    b.fecha.localeCompare(a.fecha)
  )

  const fotosIntro = data.intro.fotos ?? []

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <header
        className={
          fotosIntro.length > 0
            ? 'grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start'
            : 'max-w-2xl'
        }
      >
        <div>
          <h1 className="text-3xl font-medium text-neutral-900 md:text-4xl">
            {data.intro.titulo}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-neutral-700">
            {data.intro.descripcion}
          </p>
        </div>

        {fotosIntro.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {fotosIntro.map((foto, i) => (
              <div
                key={foto}
                className={`relative overflow-hidden rounded-lg ${
                  fotosIntro.length === 1
                    ? 'col-span-2 aspect-[16/10]'
                    : 'aspect-[4/5]'
                } ${i === 0 && fotosIntro.length > 1 ? 'mt-0' : ''} ${
                  i === 1 && fotosIntro.length > 1 ? 'mt-6' : ''
                }`}
              >
                <Image
                  src={foto}
                  alt={`Inicio de la Fundación Argentina para el Duelo - foto ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 280px, 45vw"
                />
              </div>
            ))}
          </div>
        )}
      </header>

      <div className="mt-16">
        <EventGrid eventos={eventosOrdenados} />
      </div>
    </main>
  )
}
