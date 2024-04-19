import React from 'react'
import { FormStep } from '../../ui/MultiStepForm'
import FormControl from '../../ui/FormControl'
import * as yup from 'yup'

const NinthStep = () => {
   const stepNineValidationSchema = yup.object({
      parterDescription: yup.string().required('About partner is required'),
   })
   const stepSixValidationSchema = yup.object({
      // citizenship: yup.string().required('CitizenShip is required'),
      // state: yup.string().required('State is required'),
      city: yup.string().required('City is required'),
      address: yup.string().required('Address is required'),
      contactNo: yup.string().required('Contact Number is required'),
      familyDescriotion: yup.string().required('About Family is required'),
   })

   const stepSevenValidationSchema = yup.object({
      partnerQualificationCategory: yup.string().required('Education category is required'),
      partnerQualificationDetails: yup.string().required('Education Details is required'),
      partnerOccupationCategory: yup.string().required('Occupation category  is required'),
      partnerOccupationDetails: yup.string().required('Occupation details is required'),
      partnerCitizenship: yup.string().required('citizenship is required'),
      partnerState: yup.string().required('State is required'),
      partnerCity: yup.string().required('City is required'),
   })
   return (
      <div>

         <FormStep
            name="address"
            onSubmit={console.log('step2.onSubmit')}
         // validationSchema={stepNineValidationSchema}
         >
            <div className='flex flex-col gap-y-3'>
               <h3 className='pb-2'>Partner Preferences</h3>
               <div>
                  <FormControl
                     control="textarea"
                     label="About Partner"
                     name="parterDescription"
                     star="true"
                     as="textarea"
                     placeholder="write about your partner"
                     rows={3}
                     cols={40}
                     inputStyles={`w-full text-black`}
                  />
               </div>
            </div>
         </FormStep>
      </div>
   )
}

export default NinthStep
