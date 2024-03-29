import { AudioWaveform } from 'lucide-react'
import React from 'react'

type Props = {}

const AboutCard = (props: Props) => {
  return (
    <div className="rounded-lg flex flex-col items-center gap-2 justify-center w-full">
                <AudioWaveform className="text-purple-400 w-[50px] h-[50px]" />
                <h1 className=" text-lg font-semibold">
                  Lorem ipsum dolor sit ame
                </h1>
                <p className="text-center text-sm text-neutral-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, doloremque quas beatae natus{" "}
                </p>
              </div>
  )
}

export default AboutCard