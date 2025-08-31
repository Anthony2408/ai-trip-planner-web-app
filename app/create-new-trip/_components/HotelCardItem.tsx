import { Button } from '@/components/ui/button'
import { ExternalLink, Star, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Hotel } from './ChatBox'

type Props = {
    hotel: Hotel
}

const HotelCardItem = ({hotel}:Props) => {

  return (
    <div className='shadow-md p-2 rounded-lg'>
        <div className='flex flex-col gap-1'>
            <Image src={'/hotel.jpeg'} alt='place-image' width={400} height={200}
                className='rounded-xl shadow object-cover mb-2'
            />
            <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
            <h2 className='text-gray-500'>{hotel?.hotel_address}</h2>
            <div className='flex justify-between items-center'>
            <p className='flex items-center text-green-600'> <Wallet /> {hotel?.price_per_night} / per night</p>
            <p className='flex items-center text-yellow-500'><Star /> {hotel?.rating}</p>
            </div>
                <Link href={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name} target='_blank'>
                    <Button variant='outline' className=' w-full mt-2'>View<ExternalLink /></Button>
                </Link>
                {/* <p className='line-clamp-2 text-gray-700'>{hotel?.description}</p> */}
        </div>
    </div>
  )
}

export default HotelCardItem
