import { NextResponse, NextRequest } from 'next/server'
import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { b2Client } from '@/lib/b2Client'
import workshopsData from '@/app/workshops/workshops.json'
import { Workshop } from '@/app/workshops/types'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)

    // verificar sesión
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    // verificar que el usuario tiene acceso a este workshop
    const workshops = (session.user as any)?.workshops as string[] | undefined
    if (!workshops?.includes(id)) {
      return NextResponse.json({ error: 'Sin acceso' }, { status: 403 })
    }

    // buscar el workshop para obtener el videoKey
    const workshop = (workshopsData as Workshop[]).find((w) => w.id === id)
    if (!workshop) {
      return NextResponse.json(
        { error: 'Workshop no encontrado' },
        { status: 404 }
      )
    }

    // generar signed URL válida por 2 horas
    const command = new GetObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME!,
      Key: workshop.videoKey,
    })

    const signedUrl = await getSignedUrl(b2Client, command, {
      expiresIn: 60 * 60 * 2, // 2 horas en segundos
    })

    return NextResponse.json({ url: signedUrl })
  } catch (error) {
    console.error('Error generando signed URL:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
