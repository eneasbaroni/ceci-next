export interface Workshop {
  id: string
  nombre: string
  descripcion: string
  excerpt: string
  precio: number
  moneda: 'ARS' | 'USD'
  tags: string[]
  imagen: string
  videoKey: string // clave del archivo en B2, ej: "taller-duelo-001.mp4"
  modulos: number
  duracionTotal: string
  disponible: boolean
}
