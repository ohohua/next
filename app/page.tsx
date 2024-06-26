import Link from 'next/link'
import { photos } from './data'
import Image from 'next/Image'

export default function Page() {
  return (
    <div className="p-10 mt-6 bg-sky-600 text-white rounded-xl">
      <span>Hello, App!</span>
      <div className="flex gap-6">
        {photos.map(({ src, id }) => (
          <Link href={`/photo/${id}`} key={id}>
            <Image width={200} height={200} key={id} src={src} alt="1" />
          </Link>
        ))}
      </div>
    </div>
  )
}
