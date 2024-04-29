
"use client"
import { dateToAge } from '@/app/utils/helpers/dateToAge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'
import * as assets from "@/public/assets/index"
import { useRouter } from 'next/navigation'

const SearchCard = (props) => {
   const { profileData } = props
   const router = useRouter()

   const handleRoute = (id) => {
      router.push(`/profiles/${id}`)
   }
   return (
      <div className='shadow-sm rounded-lg px-4 py-4 border border-[#b5ae7c] shadow-[#b8b28d] w-full'  >
         <a href="#" className=" w-full flex flex-row gap-3 rounded-lg py-4 px-4">
            <div className='w-[40%]'>
               <Image
                  alt={profileData?.name}
                  src={profileData?.images[0]}
                  width={150}
                  height={150}
                  className="h-56 w-full rounded-md object-cover"
               />
            </div>
            <div className='w-[60%]'>
               <div className='mb-2'>
                  <p className="font-semibold text-lg capitalize">{profileData?.firstName}</p>
               </div>
               <div className="mt-2">
                  <div className='flex flex-col gap-y-2'>
                     <div>
                        <p className='line-clamp-3  text-sm '>{profileData?.description}</p>
                     </div>
                     <div className='w-full flex flex-row items-center gap-x-3'>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Age</p>
                           <p className='font-bold'>{dateToAge(profileData.dateOfBirth)} Years</p>
                        </div>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Qualification</p>
                           <p className='font-bold truncate capitalize'>{profileData.qualificationCategory} </p>
                        </div>
                     </div>
                     <div className='w-full flex flex-row items-center gap-x-3'>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Height</p>
                           <p className='font-bold'>{profileData.height} cm</p>
                        </div>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Religion / Community</p>
                           <p className='font-bold capitalize'>{profileData.religion} </p>
                        </div>
                     </div>
                     <div className='w-full flex flex-row items-center gap-x-3'>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Mother Tongue</p>
                           <p className='font-bold capitalize'>{profileData.motherTongue}</p>
                        </div>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Martial Status </p>
                           <p className='font-bold capitalize'>{profileData.maritalStatus} </p>
                        </div>
                     </div>
                     <div className='py-2 flex justify-between items-center'>
                        <div>
                           <button onClick={handleRoute(profileData.id)} className='text-[#726300] underline'>Full details</button>
                        </div>
                        {/* <div className='flex items-center gap-x-4'>
                           <Button variant="gray" size="small" className="text-sm font-normal py-2 border-[#726300]" > <div className='flex flex-row gap-x-2 justify-center items-center'> <Image src={assets.sendInterest} width={15} height={15} alt="sendinterest" /> <span>Send interest</span>
                           </div>  </Button>
                           <Button size="small" className="text-sm font-normal px-4 py-2 border-[#726300]" > <div className='flex flex-row gap-x-2 justify-center items-center'> <Image src={assets.save} width={15} height={15} alt='save' /> <span>Save</span>
                           </div>  </Button>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>

         </a>
      </div>
   )
}

export default SearchCard
