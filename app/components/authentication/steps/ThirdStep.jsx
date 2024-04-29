import React from 'react'
import * as yup from 'yup'
import { annualIncomeDataOptions, casteDataOptions, motherTongueOptions, occupationDataOptions, physicalStatusOptions, qualificationDataOptions, religionOptions } from '@/app/utils/options'
import { FormStep } from '../../ui/MultiStepForm'
import FormControl from '../../ui/FormControl'

const ThirdStep
   = () => {

      const stepTwovalidationSchema = yup.object({
         timeOfBirth: yup.string().required('Time of Birth is required'),
         placeOfBirth: yup.string().required('Place Of Birth is required'),
         height: yup.string().required('Height is required'),
         nakshatram: yup.string().required('Nakshathram is required'),
         raashi: yup.string().required('Raashi status is required'),
         padam: yup.string().required('Padam is required'),
         gothram: yup.string().required('Gothram status is required'),
         kujaDosam: yup.string().required('kuja Dosam is required'),
         complexion: yup.string().required('Complexion status is required'),

      })
      const stepThreeValidationSchema = yup.object({
         motherTongue: yup.string().required('Mother tongue is required'),
         religion: yup.string().required('Religion is required'),
         caste: yup.string().required('Caste is required'),
         qualificationCategory: yup.string().required('Qualification Category is required'),
         qualificationDetails: yup.string().required('Qualification Details is required'),
         occupationCategory: yup.string().required('Occupation is required'),
         occupationDetails: yup.string().required('Occupation Details is required'),
         annualIncome: yup.string().required('annual Income is required'),
         physicalStatus: yup.string().required('Physical status is required'),
      })

      return (
         <div>
            <FormStep
               name="address"
               // validationSchema={stepThreeValidationSchema}
               onSubmit={console.log('step2.onSubmit')}
            // validationSchema={validationStep2Schema}
            >
               <div className='flex flex-col gap-y-3'>
                  <h3 className='pb-2'>Personal Information</h3>
                  <div className="w-full flex flex-row gap-4 items-center">
                     <div className='w-1/3'>
                        <FormControl
                           control="select"
                           label="Mother Tongue"
                           name="motherTongue"
                           inputStyles={`w-full text-black`}
                           options={motherTongueOptions}
                        />
                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="Religion "
                           name="religion"
                           inputStyles={`w-full text-black`}
                           options={religionOptions}
                        />

                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="Caste "
                           name="caste"
                           inputStyles={`w-full text-black`}
                           options={casteDataOptions}
                        />

                     </div>
                  </div>
                  <div className='flex items-center  gap-x-4'>
                     <FormControl
                        control="radio"
                        label="Physical Status"
                        name="physicalStatus"
                        options={physicalStatusOptions}
                     />
                  </div>
                  <div className='w-full flex gap-x-4'>
                     <div className='w-1/2'>
                        <FormControl
                           control="select"
                           label="Qualification category "
                           name="qualificationCategory"
                           inputStyles={`w-full text-black`}
                           options={qualificationDataOptions}
                        />
                     </div>
                     <div className='w-1/2'>
                        <FormControl
                           control="textarea"
                           label="Qualification Details"
                           name="qualificationDetails"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                  </div>
                  <div className="w-full flex gap-x-4">
                     <div className='w-1/2'>
                        <FormControl
                           control="select"
                           label="Occupation category "
                           name="occupationCategory"
                           inputStyles={`w-full text-black`}
                           options={occupationDataOptions}
                        />
                     </div>
                     <div className='w-1/2'>
                        <FormControl
                           control="textarea"
                           label="Occupation Details"
                           name="occupationDetails"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                  </div>
                  <div>
                     <FormControl
                        control="select"
                        label="Annual Income "
                        name="annualIncome"
                        inputStyles={`w-[49%] text-black`}
                        options={annualIncomeDataOptions}
                     />
                  </div>
               </div>
            </FormStep>

         </div>
      )
   }

export default ThirdStep

