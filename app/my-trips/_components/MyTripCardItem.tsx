import { ArrowBigRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Trip } from '../page'
import { tr } from 'motion/react-client'
import Link from 'next/link'

type Props = {
    trip: Trip
}

const MyTripCardItem = ({trip}:Props) => {
  return (
    <Link href={'/view-trips/'+trip?.tripId} className='p-4 border shadow rounded-xl'>
        <Image src={'/placeholder.jpeg'} alt={trip?.tripId} width={400} height={400} className='rounded-xl object-cover' />
        <h2 className='flex gap-2 font-semibold text-xl'>{trip?.tripDetail?.origin} <ArrowBigRight /> {trip?.tripDetail?.destination}</h2>
        <h2 className='mt-2 text-gray-500'>{trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget}</h2>
    </Link>
  )
}

export default MyTripCardItem
