import mongoose, { Schema, models } from 'mongoose'

const userCollection = 'user'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    workshops: {
      type: [String], // array de IDs de workshops adquiridos, ej. ["workshop-duelo-001"]
      default: [],
    },
  },
  { timestamps: true }
)

const User = models.user || mongoose.model(userCollection, userSchema)

export default User
