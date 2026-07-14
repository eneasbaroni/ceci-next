import { NextResponse, NextRequest } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'
import { getServerSession } from 'next-auth'
import { connectMongoDB } from '../../../../lib/mongodb'
import User from '../../DAO/models/user.model'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { workshop } = await req.json()

    // verificar que el usuario no tenga ya el workshop
    await connectMongoDB()
    const user = await User.findOne({ email: session.user.email })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      )
    }

    if (user.workshops.includes(workshop.id)) {
      return NextResponse.json(
        { error: 'Ya tenés acceso a este taller' },
        { status: 400 }
      )
    }

    const body = {
      items: [
        {
          id: workshop.id,
          title: workshop.nombre,
          unit_price: workshop.precio,
          quantity: 1,
          currency_id: 'ARS',
        },
      ],
      payer: {
        name: session.user.name ?? '',
        email: session.user.email,
      },
      back_urls: {
        success: `${BASE_URL}/workshops?status=success`,
        failure: `${BASE_URL}/workshops?status=failure`,
        pending: `${BASE_URL}/workshops?status=pending`,
      },
      auto_return: 'approved',
      // pasamos el email del usuario como metadata para identificarlo en el webhook
      notification_url: `${BASE_URL}/api/webhook/workshop?email=${encodeURIComponent(session.user.email)}`,
      metadata: {
        user_email: session.user.email,
        workshop_id: workshop.id,
      },
    }

    const preference = new Preference(client)
    const result = await preference.create({ body })

    return NextResponse.json({ id: result.id })
  } catch (error) {
    console.error('Error creando preferencia de workshop:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
