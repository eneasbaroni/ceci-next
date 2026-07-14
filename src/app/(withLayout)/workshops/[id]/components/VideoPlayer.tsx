'use client'

interface VideoPlayerProps {
  src: string
}

export function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video w-full">
      <video
        src={src}
        controls
        controlsList="nodownload"
        className="h-full w-full"
        onContextMenu={(e) => e.preventDefault()}
      >
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  )
}
