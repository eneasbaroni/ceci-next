import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/authOptions'
import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { b2Client } from '../../../../lib/b2Client'
import { connectMongoDB } from '../../../../lib/mongodb'
import WorkshopModel from '../../../api/DAO/models/workshop.model'
import { Workshop } from '../types'
import { VideoPlayer } from './components/VideoPlayer'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  await connectMongoDB()
  const workshop = await WorkshopModel.findOne({ id }).lean<Workshop>()
  return {
    title: workshop ? `${workshop.nombre} - Cecilia Torres` : 'Taller',
    description: workshop?.excerpt,
  }
}

export default async function WorkshopPage({ params }: Props) {
  const { id } = await params
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/workshops')
  }

  const workshops = (session.user as any)?.workshops as string[] | undefined
  if (!workshops?.includes(id)) {
    redirect('/workshops')
  }

  await connectMongoDB()
  const workshop = await WorkshopModel.findOne({ id }).lean<Workshop>()

  if (!workshop) {
    redirect('/workshops')
  }

  const command = new GetObjectCommand({
    Bucket: process.env.B2_BUCKET_NAME!,
    Key: workshop.videoKey,
  })
  const videoUrl = await getSignedUrl(b2Client, command, {
    expiresIn: 60 * 60 * 2,
  })

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:px-8">
      <a
        href="/workshops"
        className="flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-900"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
        Volver a talleres
      </a>

      <header className="mt-8">
        <div className="flex flex-wrap gap-1.5">
          {workshop.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cc-pink/50 px-2.5 py-0.5 text-xs text-cc-violet"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-2xl font-medium leading-snug text-neutral-900 md:text-3xl">
          {workshop.nombre}
        </h1>
        <p className="mt-3 text-sm text-neutral-400">
          {workshop.modulos} módulo · {workshop.duracionTotal}
        </p>
      </header>

      <div className="mt-8 overflow-hidden rounded-lg border border-cc-pink/50 bg-black">
        <VideoPlayer src={videoUrl} />
      </div>

      <div className="mt-8 max-w-2xl">
        <h2 className="text-lg font-medium text-neutral-900">
          Sobre este taller
        </h2>
        <p className="mt-3 text-base leading-relaxed text-neutral-700">
          {workshop.descripcion}
        </p>
      </div>
    </main>
  )
}
