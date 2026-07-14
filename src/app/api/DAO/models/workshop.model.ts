import mongoose, { Schema, models } from 'mongoose'

const workshopCollection = 'workshop'

const workshopSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    moneda: {
      type: String,
      enum: ['ARS', 'USD'],
      default: 'ARS',
    },
    tags: {
      type: [String],
      default: [],
    },
    imagen: {
      type: String,
      required: true,
    },
    videoKey: {
      type: String,
      required: true,
    },
    modulos: {
      type: Number,
      default: 1,
    },
    duracionTotal: {
      type: String,
    },
    disponible: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

const Workshop =
  models.workshop || mongoose.model(workshopCollection, workshopSchema)

export default Workshop
