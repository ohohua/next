import { NextPage } from 'next'

interface Props {}

const Default: NextPage<Props> = ({}) => {
  return (
    <div className="h-60 flex-1 rounded-xl bg-indigo-700 text-white flex items-center justify-center">
      hello, analytics default
    </div>
  )
}

export default Default
