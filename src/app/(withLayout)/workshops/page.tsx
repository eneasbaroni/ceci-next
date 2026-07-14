import { Metadata } from 'next'
import { connectMongoDB } from '../../../lib/mongodb'
import Workshop from '../../api/DAO/models/workshop.model'
import { WorkshopCard } from './components/WorkshopCard'
import { Workshop as IWorkshop } from './types'

export const metadata: Metadata = {
  title: 'Talleres - Cecilia Torres',
  description:
    'Talleres de educación para el duelo con Cecilia Torres, tanatóloga.',
}

export default async function WorkshopsPage() {
  await connectMongoDB()

  const talleresRaw = await Workshop.find({ disponible: true })
    .sort({ createdAt: -1 })
    .lean()

  // serializar para eliminar los métodos de Mongoose antes de pasar a Client Components
  const talleres = JSON.parse(JSON.stringify(talleresRaw)) as IWorkshop[]

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <header className="max-w-2xl">
        <p className="text-sm uppercase tracking-wide text-neutral-400">
          Formación en línea
        </p>
        <h1 className="mt-3 text-3xl font-medium text-neutral-900 md:text-4xl">
          Talleres ✹
        </h1>
        <p className="mt-5 text-base leading-relaxed text-neutral-700">
          Espacios de aprendizaje y acompañamiento para transitar el duelo de
          manera consciente. Cada taller está diseñado para que puedas
          recorrerlo a tu propio ritmo, desde donde estés.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {talleres.map((taller, i) => (
          <WorkshopCard key={taller.id} taller={taller} numero={i + 1} />
        ))}
      </div>

      <div className="mt-16 border-t border-neutral-200 pt-10 text-center">
        <p className="text-sm text-neutral-500">
          ¿Tenés dudas sobre qué taller es para vos?{' '}
          <a
            href="/contact"
            className="underline underline-offset-4 hover:text-neutral-900"
          >
            Escribime
          </a>
        </p>
      </div>
    </main>
  )
}
