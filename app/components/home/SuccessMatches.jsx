"use client"
import React from 'react'
import Image from 'next/image'
import { succesMaches } from '@/app/constants'
import SuccessMatchCard from '../common/SuccessMatchCard'

const SuccessMatches = () => {
   return (
      <section className='my-12 mx-auto max-w-screen-2xl'>
         <div className='flex flex-col gap-y-3'>
            <h2 className='text-center'>Matched by World Netha</h2>
            <p className='text-center mx-auto lg:mx-60'>Our Success Stories section is filled with heartwarming tales of couples who found their soulmates through our platform. From different walks of life, religions, and communities, these love stories showcase the effectiveness of our platform in bringing people together. Browse through the stories and be inspired by the beautiful journeys that led to these happy endings. </p>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 my-8 mx-auto ms-10 me-10'>
            {
               succesMaches && succesMaches.map((pair, ind) => {
                  return <SuccessMatchCard key={ind} pair={pair} />
               })
            }
         </div>
      </section>
   )
}

export default SuccessMatches
