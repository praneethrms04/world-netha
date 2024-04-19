"use client"
import HeroCard from '@/app/components/profile/HeroCard'
import ProfieleDetails from '@/app/components/profile/PersonalDetails'
import SuggestedCcard from '@/app/components/profile/SuggestedCard'
import { profiles } from '@/app/constants'
import getAllProfies from '@/app/lib/getAllProfiles'
import getProfile from '@/app/lib/getProfile'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const WholeProfile = ({ profileData }) => {

   const { profileId } = useParams()
   const [userGender, setUserGender] = useState('')
   const [profiles, setProfiles] = useState([]);
   const [loading, setLoading] = useState(false)

   const getUserById = async () => {
      setLoading(true)
      try {
         const user = await getProfile(profileId)
         setUserGender(user?.gender)
         setLoading(false)
      } catch (error) {
         console.log(user)
      }
   }

   useEffect(() => {
      if (typeof window !== "undefined") {
         fetchProfiles();
         getUserById()
      }
   }, [userGender]);

   const fetchProfiles = async () => {
      setLoading(true)
      try {
         const profilesData = await getAllProfies();
         const data = profilesData.filter(
            (profile) => profile.gender === userGender && profile.id !== profileId
         );
         setProfiles(data);
         setLoading(false)
      } catch (error) {
         console.error("Error fetching profiles:", error);
      }
   };

   console.log(profileId)
   console.log(profileData)
   return (
      <>
         <div className='mx-auto max-w-screen-2xl py-5 px-4 md:px-8 '>
            <div>
               <div className='grid grid-cols-1 gap-5  my-3'>
                  <div className='flex ms-10 '>
                     <HeroCard profileData={profileData} />
                  </div>
               </div>
               <div className='w-full flex flex-row gap-x-5'>
                  <div className='w-2/3'>
                     <div>
                        <div className='flex ms-10 '> <ProfieleDetails profileData={profileData} /> </div>
                     </div>
                  </div>
                  <div className="w-1/3">
                     <div className='grid grid-cols-1 gap-5  my-3'>
                        {
                           loading ? <p>Loading</p> : (
                              <div>
                                 {
                                    profiles && profiles.length > 0 && (
                                       <>
                                          {
                                             profiles.map((profileData, ind) => {
                                                return (
                                                   <div className='flex ms-10 '>
                                                      <SuggestedCcard key={ind} profileData={profileData} />
                                                   </div>
                                                )
                                             })
                                          }
                                       </>
                                    )
                                 }
                                 {
                                    profiles && profiles.length === 0 && (
                                       <p>No Suggestions found</p>
                                    )
                                 }
                              </div>

                           )
                        }
                     </div>


                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default WholeProfile
