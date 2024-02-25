import React from 'react'
import Heading from './Heading'
import ServiceCard from './ServiceCard'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='bg-neutral-200 py-16 px-4 gap-12 flex flex-col rounded-lg'>
        <Heading />
        <div className='flex items-start justify-center flex-wrap gap-4'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>
  )
}

export default Services