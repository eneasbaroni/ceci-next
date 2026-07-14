interface WorkshopCoverProps {
  nombre: string
  numero: number // posición en el listado, empieza en 1
}

export function WorkshopCover({ nombre, numero }: WorkshopCoverProps) {
  const numeroFormateado = String(numero).padStart(2, '0')

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-cc-violet p-6">
      {/* círculos decorativos */}
      <div
        className="absolute -right-8 -top-8 h-36 w-36 rounded-full"
        style={{ background: 'rgba(253,173,173,0.25)' }}
      />
      <div
        className="absolute -bottom-10 -left-5 h-40 w-40 rounded-full"
        style={{ background: 'rgba(253,173,173,0.15)' }}
      />

      <span className="relative text-xs uppercase tracking-widest text-white/70">
        Taller
      </span>

      <div className="relative">
        <div className="mb-2 text-5xl font-medium leading-none text-white/10">
          {numeroFormateado}
        </div>
        <div className="mb-3 h-0.5 w-8 bg-cc-pink" />
        <p className="text-sm font-medium leading-snug text-white">{nombre}</p>
      </div>
    </div>
  )
}
