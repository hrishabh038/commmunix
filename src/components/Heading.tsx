import React from 'react'

type Props = {
  smText: string
  title: string
  para: string
}

const Heading = (props: Props) => {
  return (
    <div className="w-full sm:w-[600px] m-auto text-center flex flex-col gap-4">
    <div className="text-[10px] font-bold tracking-widest underline text-orange-500">
      {props.smText.toUpperCase()}
    </div>
    <h1 className="text-2xl font-semibold">
      {props.title}
    </h1>
    <p className="text-xs text-neutral-400">
      {props.para}
    </p>
  </div>
  )
}

export default Heading