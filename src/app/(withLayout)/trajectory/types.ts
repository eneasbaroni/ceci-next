export interface Evento {
  id: string
  fecha: string // formato "YYYY-MM" o "YYYY-MM-DD", usado solo para ordenar
  fechaDisplay: string // texto que se muestra al usuario, ej. "Marzo de 2026"
  titulo: string
  rol: string
  ponencia?: string
  excerpt: string // resumen corto curado a mano, usado en la card
  descripcion: string
  fotos: string[]
}

export interface TrayectoriaData {
  intro: {
    titulo: string
    descripcion: string
    fotos?: string[]
  }
  eventos: Evento[]
}
