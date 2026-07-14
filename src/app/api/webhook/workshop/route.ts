import { NextResponse, NextRequest } from 'next/server'
import { MercadoPagoConfig, Payment } from 'mercadopago'
import { connectMongoDB } from '../../../../lib/mongodb'
import User from '../../DAO/models/user.model'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // MP manda distintos tipos de notificaciones; solo nos interesan los pagos
    if (body.type !== 'payment') {
      return NextResponse.json({ received: true })
    }

    const paymentId = body.data?.id
    if (!paymentId) {
      return NextResponse.json({ error: 'Sin payment id' }, { status: 400 })
    }

    // consultamos el pago directamente a la API de MP para no confiar
    // ciegamente en lo que viene en el body del webhook
    const payment = new Payment(client)
    const pagoData = await payment.get({ id: paymentId })

    if (pagoData.status !== 'approved') {
      // pago no aprobado — no hacemos nada pero respondemos 200
      // para que MP no reintente la notificación
      return NextResponse.json({ received: true })
    }

    const workshopId = pagoData.metadata?.workshop_id
    const userEmail = pagoData.metadata?.user_email

    if (!workshopId || !userEmail) {
      console.error('Webhook: faltan metadata (workshop_id o user_email)')
      return NextResponse.json(
        { error: 'Metadata incompleta' },
        { status: 400 }
      )
    }

    await connectMongoDB()

    // $addToSet evita duplicados si el webhook llega más de una vez
    await User.findOneAndUpdate(
      { email: userEmail },
      { $addToSet: { workshops: workshopId } }
    )

    console.log(`Acceso otorgado: ${userEmail} → ${workshopId}`)

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error en webhook de workshop:', error)
    // devolvemos 500 para que MP reintente — si falló por error nuestro
    // queremos que vuelva a intentarlo
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
