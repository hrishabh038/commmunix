import React from 'react'
import AboutCard from "./AboutCard"

type Props = {}

const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-14 items-center">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="border bg-black/15 w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-video rounded-lg"></div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  nobis nulla eveniet doloribus obcaecati fugiat!
                </h1>
                <p className="text-sm text-neutral-500 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  quae nostrum expedita quibusdam dolorem consequatur porro nam
                  debitis deleniti neque, officia, eos aperiam. Autem sint
                  dignissimos labore repudiandae nisi possimus iusto
                  exercitationem. Cum maxime asperiores, omnis ipsum,
                  accusantium, expedita reiciendis qui quis adipisci nihil fugit
                  iste veniam eveniet? Recusandae, iste?
                </p>
              </div>
            </div>

            <div className="flex  flex-col-reverse sm:flex-row items-center gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  nobis nulla eveniet doloribus obcaecati fugiat!
                </h1>
                <p className="text-sm text-neutral-500 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  quae nostrum expedita quibusdam dolorem consequatur porro nam
                  debitis deleniti neque, officia, eos aperiam. Autem sint
                  dignissimos labore repudiandae nisi possimus iusto
                  exercitationem. Cum maxime asperiores, omnis ipsum,
                  accusantium, expedita reiciendis qui quis adipisci nihil fugit
                  iste veniam eveniet? Recusandae, iste?
                </p>
              </div>
              <div className="border bg-black/15 w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-video rounded-lg"></div>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-6 pt-8">
              <AboutCard />
              <AboutCard />
              <AboutCard />
            </div>
          </div>
  )
}

export default About