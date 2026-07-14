/**
 * Script de seed para cargar los workshops del JSON a MongoDB.
 * Ejecutar UNA SOLA VEZ con: npx ts-node src/scripts/seed-workshops.ts
 * Una vez corrido, los datos viven en Mongo y el JSON puede ignorarse.
 */

import mongoose from 'mongoose'
import workshopsData from '../data/workshops.json'

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME

const URL = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

const workshopSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  excerpt: { type: String, required: true },
  precio: { type: Number, required: true },
  moneda: { type: String, default: 'ARS' },
  tags: { type: [String], default: [] },
  imagen: { type: String, required: true },
  videoKey: { type: String, required: true },
  modulos: { type: Number, default: 1 },
  duracionTotal: { type: String },
  disponible: { type: Boolean, default: true },
})

const Workshop =
  mongoose.models.workshop || mongoose.model('workshop', workshopSchema)

async function seed() {
  try {
    await mongoose.connect(URL)
    console.log('Conectado a MongoDB')

    for (const workshop of workshopsData) {
      await Workshop.findOneAndUpdate({ id: workshop.id }, workshop, {
        upsert: true,
        new: true,
      })
      console.log(`✓ ${workshop.nombre}`)
    }

    console.log('\nSeed completado.')
    process.exit(0)
  } catch (error) {
    console.error('Error en seed:', error)
    process.exit(1)
  }
}

seed()
