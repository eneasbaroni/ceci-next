'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Workshop } from '../types'
import { WorkshopCover } from './WorkshopCover'

interface WorkshopCardProps {
  taller: Workshop
  numero: number
}

initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!, { locale: 'es-AR' })

const mpCustomization = {
  visual: {
    buttonBackground: 'white',
    borderRadius: '6px',
  },
  checkout: {
    theme: {
      elementsColor: '#c28484',
      headerColor: '#c28484',
    },
  },
}

export function WorkshopCard({ taller, numero }: WorkshopCardProps) {
  const { data: session, status } = useSession()
  const [preferenceId, setPreferenceId] = useState<string | null>(null)
  const [loadingPago, setLoadingPago] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const precioFormateado = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: taller.moneda,
    maximumFractionDigits: 0,
  }).format(taller.precio)

  const workshops = (session?.user as any)?.workshops as string[] | undefined
  const tieneAcceso = workshops?.includes(taller.id) ?? false

  const handleComprar = async () => {
    setLoadingPago(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout/workshop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workshop: taller }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Hubo un error al procesar el pago.')
        return
      }

      setPreferenceId(data.id)
    } catch (err) {
      setError('No se pudo conectar con el servidor.')
    } finally {
      setLoadingPago(false)
    }
  }

  const renderBoton = () => {
    if (status === 'loading') {
      return (
        <div className="flex h-11 w-full animate-pulse rounded-md bg-neutral-100" />
      )
    }

    if (!session) {
      return (
        <button
          onClick={() => signIn('google')}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-cc-violet px-4 py-3 text-base font-moneta font-medium text-white transition-opacity hover:opacity-80"
        >
          Iniciar sesión para acceder
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/60px-Google_%22G%22_logo.svg.png?_=20230822192911"
            alt="Google"
            className="h-4 w-4"
          />
        </button>
      )
    }

    if (tieneAcceso) {
      return (
        <a
          href={`/workshops/${taller.id}`}
          className="flex w-full items-center justify-center rounded-md bg-cc-violet px-4 py-3 text-base font-moneta font-medium text-white transition-opacity hover:opacity-80"
        >
          Ver taller →
        </a>
      )
    }

    if (preferenceId) {
      return (
        <Wallet
          initialization={{ preferenceId, redirectMode: 'modal' }}
          customization={mpCustomization as any}
        />
      )
    }

    return (
      <button
        onClick={handleComprar}
        disabled={loadingPago}
        className="w-full rounded-md  bg-cc-violet px-4 py-3 text-base font-moneta font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
      >
        {loadingPago ? 'Procesando...' : `Adquirir — ${precioFormateado}`}
      </button>
    )
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-cc-pink/50 bg-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <WorkshopCover nombre={taller.nombre} numero={numero} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 right-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-neutral-900 backdrop-blur-sm">
            {precioFormateado}
          </span>
        </div>
        {tieneAcceso && (
          <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900 backdrop-blur-sm">
            ✓ Adquirido
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 py-6">
        <div className="flex flex-wrap gap-1.5">
          {taller.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cc-pink/50 px-2.5 py-0.5 text-xs text-cc-violet"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-3 text-lg font-medium leading-snug text-neutral-900">
          {taller.nombre}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {taller.excerpt}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
          <span>{taller.modulos} módulos</span>
          <span>·</span>
          <span>{taller.duracionTotal}</span>
        </div>

        {error && <p className="mt-3 text-xs text-red-500">{error}</p>}

        <div className="mt-auto pt-6">{renderBoton()}</div>
      </div>
    </article>
  )
}
