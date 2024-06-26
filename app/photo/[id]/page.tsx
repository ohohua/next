import { photos } from '@/app/data'
import Image from 'next/Image'

type Props = {
  params: {
    id: number | string
  }
}
const Page: React.FC<Props> = ({ params }) => {
  const photo = photos.find((p) => p.id === params.id)
  return (
    <Image
      className="block w-1/4 mx-auto mt-10"
      width={200}
      height={200}
      src={photo?.src as string}
      alt={params?.id as string}
    />
  )
}

export default Page
