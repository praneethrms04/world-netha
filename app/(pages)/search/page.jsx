"use client"

import { HeroSection } from '@/app/components/home'
import SearchCard from '@/app/components/search/SearchCard'
import FormControl from '@/app/components/ui/FormControl'
import { profiles } from '@/app/constants'
import { annualIncomeDataOptions, qualificationDataOptions } from '@/app/utils/options'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'

const Search = () => {

  const [showHeight, setShowHeight] = useState(false)
  const [showIncome, setShowIncome] = useState(false)
  const [showQualification, setShowQualification] = useState(false)

  return (
    <div>
      <HeroSection />
      <div className=' max-w-screen-2xl mx-auto px-4 md:px-8 py-4'>
        <div className='w-full flex flex-row gap-x-6'>
          <div className='w-1/3'>
            <h3>Advanced Searched / Features </h3>
            <div className='flex flex-col gap-y-3'>

              <div className='border border-slate-400 rounded-md'>
                <div className='px-3 py-3'>
                  <div className='flex justify-between'>
                    <h4>HEIGHT (in cms)</h4>
                    <h4 onClick={() => setShowHeight((prev) => !prev)}>{showHeight ? 'up' : 'down'}</h4>
                  </div>
                  {
                    showHeight && (
                      <Formik>
                        {
                          (formikProps) => {
                            return (
                              <Form>
                                <div className='flex flex-row gap-x-3 items-center'>
                                  <FormControl
                                    control="input"
                                    name="ageFrom"
                                    placeholder="age"
                                  />
                                  <div>
                                    <span>to </span>
                                  </div>
                                  <FormControl
                                    control="input"
                                    name="ageFrom"
                                    placeholder="age"
                                  />
                                </div>
                              </Form>
                            )
                          }
                        }

                      </Formik>
                    )
                  }
                  <div>

                  </div>
                </div>


              </div>
              <div className='border border-slate-400 rounded-md'>
                <div className='px-3 py-3'>
                  <div className='flex justify-between'>
                    <h4>INCOME </h4>
                    <h4 onClick={() => setShowIncome((prev) => !prev)}>{showHeight ? 'up' : 'down'}</h4>
                  </div>
                  {
                    showIncome && (
                      <Formik>
                        {
                          (formikProps) => {
                            return (
                              <Form>
                                <div className=' '>
                                  <FormControl
                                    control="select"
                                    name="annualIncome"
                                    inputStyles={`w-full text-black`}
                                    options={annualIncomeDataOptions}
                                  />
                                </div>
                              </Form>
                            )
                          }
                        }

                      </Formik>
                    )
                  }
                  <div>
                  </div>
                </div>
              </div>
              <div className='border border-slate-400 rounded-md'>
                <div className='px-3 py-3'>
                  <div className='flex justify-between'>
                    <h4>QUALIFICATION</h4>
                    <h4 onClick={() => setShowQualification((prev) => !prev)}>{showHeight ? 'up' : 'down'}</h4>
                  </div>
                  {
                    showQualification && (
                      <Formik>
                        {
                          (formikProps) => {
                            return (
                              <Form>
                                <div className=''>
                                  <FormControl
                                    control="select"
                                    name="partnerEducationCategory"
                                    inputStyles={`w-full text-black`}
                                    options={qualificationDataOptions}
                                  />
                                </div>
                              </Form>
                            )
                          }
                        }
                      </Formik>
                    )
                  }
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-2/3'>
            <h3>Your search results</h3>
            <div className='grid grid-cols-1 gap-5  my-3'>
              {
                profiles && profiles.filter((profile) => profile.gender === "Male").slice(0, 5).map((profileData, index) => {
                  return <div className='flex ms-10 '> <SearchCard key={index} profileData={profileData} /> </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
