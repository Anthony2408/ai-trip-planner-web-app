"use client"
import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';
import { useTripDetail } from '@/app/provider';
import { TripInfo } from './ChatBox';
import { tr } from 'motion/react-client';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

// const TRIP_DATA = {
//   "destination": "Pune",
//   "duration": "2 days",
//   "origin": "Mumbai",
//   "budget": "Moderate",
//   "group_size": "Family (3-5 people)",
//   "hotels": [
//     {
//       "hotel_name": "Lemon Tree Premier",
//       "hotel_address": "5/3/6, Mundhwa Road, Ganga Nagar, Kalyani Nagar, Pune, Maharashtra 411006",
//       "price_per_night": "₹4,500",
//       "hotel_image_url": "https://example.com/lemon-tree.jpg",
//       "geo_coordinates": {
//         "latitude": 18.5535,
//         "longitude": 73.9155
//       },
//       "rating": 4.3,
//       "description": "Family-friendly hotel with outdoor pool and multiple dining options"
//     },
//     {
//       "hotel_name": "Courtyard by Marriott",
//       "hotel_address": "Survey No. 21, Balewadi, Pune, Maharashtra 411045",
//       "price_per_night": "₹5,200",
//       "hotel_image_url": "https://example.com/marriott.jpg",
//       "geo_coordinates": {
//         "latitude": 18.5974,
//         "longitude": 73.7309
//       },
//       "rating": 4.5,
//       "description": "Modern hotel with fitness center and restaurant, near adventure spots"
//     }
//   ],
//   "itinerary": [
//     {
//       "day": 1,
//       "day_plan": "Adventure trekking and historical exploration",
//       "best_time_to_visit_day": "6:00 AM - 10:00 AM",
//       "activities": [
//         {
//           "place_name": "Sinhagad Fort",
//           "place_details": "Historic hill fortress with challenging trekking routes and panoramic views",
//           "place_image_url": "https://example.com/sinhagad.jpg",
//           "geo_coordinates": {
//             "latitude": 18.3667,
//             "longitude": 73.7500
//           },
//           "place_address": "Sinhagad Ghat Road, Thoptewadi, Maharashtra 411025",
//           "ticket_pricing": "Free entry",
//           "time_travel_each_location": "2-3 hours",
//           "best_time_to_visit": "Early morning (6:00-8:00 AM)"
//         },
//         {
//           "place_name": "Pavana Lake",
//           "place_details": "Scenic reservoir offering water sports like kayaking and boating",
//           "place_image_url": "https://example.com/pavana-lake.jpg",
//           "geo_coordinates": {
//             "latitude": 18.7167,
//             "longitude": 73.5167
//           },
//           "place_address": "Pavana Lake, Lonavala, Maharashtra 410401",
//           "ticket_pricing": "Water sports: ₹300-800 per person",
//           "time_travel_each_location": "2 hours",
//           "best_time_to_visit": "Afternoon (2:00-4:00 PM)"
//         }
//       ]
//     },
//     {
//       "day": 2,
//       "day_plan": "Nature exploration and scenic drives",
//       "best_time_to_visit_day": "7:00 AM - 11:00 AM",
//       "activities": [
//         {
//           "place_name": "Tamhini Ghat",
//           "place_details": "Mountain pass with waterfalls, trekking trails and breathtaking valley views",
//           "place_image_url": "https://example.com/tamhini.jpg",
//           "geo_coordinates": {
//             "latitude": 18.4667,
//             "longitude": 73.4000
//           },
//           "place_address": "Tamhini Ghat, Maharashtra 412108",
//           "ticket_pricing": "Free entry",
//           "time_travel_each_location": "3-4 hours",
//           "best_time_to_visit": "Morning (7:00-9:00 AM)"
//         },
//         {
//           "place_name": "Lohagad Fort",
//           "place_details": "Ancient fort with moderate trekking routes and historical significance",
//           "place_image_url": "https://example.com/lohagad.jpg",
//           "geo_coordinates": {
//             "latitude": 18.7067,
//             "longitude": 73.4750
//           },
//           "place_address": "Lohagad Fort, Maharashtra 410405",
//           "ticket_pricing": "Free entry",
//           "time_travel_each_location": "2-3 hours",
//           "best_time_to_visit": "Late afternoon (3:00-5:00 PM)"
//         }
//       ]
//     }
//   ]
// }

const Itinerary = () => {
  //@ts-ignore
  const {tripDetailInfo, setTripDetailInfo} = useTripDetail()
  const [tripData, setTripData] = React.useState<TripInfo | null>(null)

  React.useEffect(() => {
    tripDetailInfo && setTripData(tripDetailInfo)
  }, [tripDetailInfo])

  const data = tripData ? [
    {
      title: "Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {tripData?.hotels.map((hotel, index) => (
            <HotelCardItem hotel={hotel} />
          ))}
        </div>
      ),
    },
    ...tripData?.itinerary.map((dayData) => ({
        title: `Day ${dayData.day}`,
        content: (
            <div>
                <p className='text-primary font-semibold'>Best Time :{dayData.best_time_to_visit_day}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {dayData.activities.map((activity, index) => (
                        <PlaceCardItem activity={activity} />
                    ))}
                </div>
            </div>
        )
    }))
  ] : [];
  return (
    <div className="relative w-full h-[83vh] overflow-auto">
      {/* @ts-ignore */}
      {tripData ? <Timeline data={data} tripData={tripData} /> 
      : 
      <div>
        <h2 className='flex gap-2 items-center text-3xl text-white left-20 absolute bottom-20'><ArrowLeft />Getting to know you to build perfect trip here...</h2>
      <Image src={'/travel.jpg'} alt="travel" width={800} height={600} className='w-full h-full object-cover rounded-3xl' />
      
      </div>
      }
    </div>
  );
}

export default Itinerary
