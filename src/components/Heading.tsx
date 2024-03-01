import React from 'react'

type Props = {
  title: string
}

const Heading = (props: Props) => {
  return (
    <div className="w-full sm:w-[600px] m-auto text-center flex flex-col items-center gap-2">
    <h1 className="text-2xl font-semibold border-b-[3px] border-orange-500 pb-1 w-fit">
      {props.title}
    </h1>
  </div>
  )
}

export default Heading