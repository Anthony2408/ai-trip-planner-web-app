"use client"
import Itinerary from '@/app/create-new-trip/_components/Itinerary'
import { Trip } from '@/app/my-trips/page'
import { useTripDetail, useUserDeatil } from '@/app/provider'
import { api } from '@/convex/_generated/api'
import { useConvex } from 'convex/react'
import { useParams } from 'next/navigation'
import React from 'react'

const Viewtrip = () => {

    const {tripid} = useParams()
    const {userDetail, setUserDetail} = useUserDeatil()
    const convex = useConvex()
    const [tripData, setTripData] = React.useState<Trip>()
    //@ts-ignore
    const {tripDetailInfo, setTripDetailInfo} = useTripDetail()

    React.useEffect(() => {
        userDetail && GetTrip()
    }, [userDetail])

    const GetTrip = async() => {
        const result = await convex.query(api.tripDetail.GetTripById,{
            uid:userDetail?._id,
            tripid:tripid+''
        })
        console.log(result)
        setTripData(result)
        setTripDetailInfo(result?.tripDetail)
    }


  return (
    <div>
      <Itinerary />
    </div>
  )
}

export default Viewtrip
