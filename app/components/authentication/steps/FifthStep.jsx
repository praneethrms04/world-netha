import React from 'react'
import * as yup from 'yup'
import { FormStep } from '../../ui/MultiStepForm'
import FormControl from '../../ui/FormControl'
import { brothersDataOptions, sistersDataOptions } from '@/app/utils/options'

const FifthStep = () => {
   const stepFiveValidationSchema = yup.object({
      fatherName: yup.string().required('Father Name is required'),
      fatherOccupatiion: yup.string().required('Occupation is required'),
      motherName: yup.string().required('Mother Name is required'),
      motherOccupatiion: yup.string().required('Occupation is required'),
      noOfBrothers: yup.string().required('Number of Brothers is required'),
      noOfSisters: yup.string().required('Number of Sisters is required'),

   })
   return (
      <div>
         <FormStep
            name="address"
            onSubmit={console.log('step2.onSubmit')}
         // validationSchema={stepFiveValidationSchema}
         >
            <div className="flex flex-col gap-y-3">
               <h3 className='pb-2'>Family Information</h3>
               <div className='w-full flex flex-row gap-x-3'>
                  <div className='w-1/2'>
                     <FormControl
                        control="input"
                        label="Father Name"
                        name="fatherName"
                        star="true"
                        inputStyles={`w-full text-black`}
                     />
                  </div>
                  <div className='w-1/2'>
                     <FormControl
                        control="input"
                        label="Occupation"
                        name="fatherOccupatiion"
                        star="true"
                        inputStyles={`w-full text-black`}
                     />
                  </div>

               </div>
               <div className='w-full flex flex-row gap-x-3'>
                  <div className='w-1/2'>
                     <FormControl
                        control="input"
                        label="Mother Name"
                        name="motherName"
                        star="true"
                        inputStyles={`w-full text-black`}
                     />
                  </div>
                  <div className='w-1/2'>
                     <FormControl
                        control="input"
                        label="Occupation"
                        name="motherOccupatiion"
                        star="true"
                        inputStyles={`w-full text-black`}
                     />
                  </div>

               </div>
               <div className='w-full flex flex-row gap-x-3'>
                  <div className='w-1/2'>
                     <FormControl
                        control="select"
                        label="Number of Brothers "
                        name="noOfBrothers"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={brothersDataOptions}
                     />
                  </div>
                  <div className='w-1/2'>
                     <FormControl
                        control="select"
                        label="Number of Sisters"
                        name="noOfSisters"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={sistersDataOptions}
                     />
                  </div>

               </div>
            </div>


         </FormStep>

      </div>
   )
}

export default FifthStep
