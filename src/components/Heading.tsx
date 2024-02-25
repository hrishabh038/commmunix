import React from 'react'

type Props = {}

const Heading = (props: Props) => {
  return (
    <div className="w-full sm:w-[600px] m-auto text-center flex flex-col gap-2">
    <div className="text-[10px] font-bold tracking-widest underline text-orange-500">
      {"What we do".toUpperCase()}
    </div>
    <h1 className="text-xl font-semibold">
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <p className="text-xs text-neutral-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Repellendus maxime dolores, fugit voluptas aperiam officia id
      beatae tempora eveniet dolore.
    </p>
  </div>
  )
}

export default Heading