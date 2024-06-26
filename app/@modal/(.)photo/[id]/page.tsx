import { photos } from '@/app/data'
import Image from 'next/Image'

type Props = {
  params: {
    id: number | string
  }
}
const Page: React.FC<Props> = ({ params }) => {
  const photo = photos.find((photo) => photo.id === params.id)

  return (
    <div className="bg-yellow-300 flex justify-center items-center  rounded-xl h-[300px] mt-6">
      {photo?.src && <Image width={200} height={200} key={photo?.id} src={photo?.src} alt="1" />}
    </div>
  )
}

export default Page
