import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectMongoDB } from './mongodb'
import User from '@//api/DAO/models/user.model'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  theme: {
    colorScheme: 'dark',
    brandColor: 'b33f4c',
    logo: '/Images/icon.svg',
    buttonText: 'b33f4c',
  },
  callbacks: {
    async signIn({ user }) {
      try {
        await connectMongoDB()
        const existe = await User.findOne({ email: user.email })
        if (!existe) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            workshops: [],
          })
        }
        return true
      } catch (error) {
        console.error('Error al guardar usuario en MongoDB:', error)
        return false
      }
    },

    async session({ session }) {
      try {
        await connectMongoDB()
        const userDB = await User.findOne({ email: session.user?.email })
        if (userDB) {
          ;(session.user as any).workshops = userDB.workshops as string[]
        }
      } catch (error) {
        console.error('Error al obtener workshops de la sesión:', error)
      }
      return session
    },
  },
}
