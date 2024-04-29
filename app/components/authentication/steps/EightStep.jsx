import React from 'react'
import * as yup from 'yup'
import { FormStep } from '../../ui/MultiStepForm'
import FormControl from '../../ui/FormControl'
import { ageFromOptions, ageToOptions, casteDataOptions, complexionOptions, heightOptions, kujaDosamOptions, motherTongueOptions, nakshatrasOptions, physicalStatusOptions, raashiOptions, religionOptions } from '@/app/utils/options'

const EightStep = () => {

   const stepEightValidationSchema = yup.object({
      partnerAgeFrom: yup.string().required('Age from is required'),
      partnerAgeTo: yup.string().required('Age to is required'),
      partnerHeightFrom: yup.string().required('Height from is required'),
      partnerHeightTo: yup.string().required('Height to is required'),
      partnerNakshatram: yup.string().required('Nakshatram is required'),
      partnerRaashi: yup.string().required('Raashi Details is required'),
      partnerGothram: yup.string().required('Gothram is required'),
      partnerMotherTongue: yup.string().required('Mother Tongue is required'),
      partnerReligion: yup.string().required('Religin is required'),
      partnerCaste: yup.string().required('Caste is required'),
      partnerKujaDosam: yup.string().required('Kuja dosam is required'),
      partnerComplexion: yup.string().required('Complexion is required'),
      partnerPhysicalStatus: yup.string().required('Physical Status is required'),

   })
   return (
      <div>
         <FormStep
            stepName='basic-info'
            // validationSchema={stepEightValidationSchema}
            onSubmit={console.log('Step one submitted')}
         >
            <div
               className=' flex flex-col gap-y-3'
            //  onSubmit={formikProps.handleSubmit}
            >
               <h3 className='pb-2'>Partner Preferences</h3>
               <div className="flex flex-col gap-x-4">
                  <div className='w-full flex gap-x-2' >
                     <div className=" w-3/12">
                        <FormControl
                           control="select"
                           label="Age From"
                           name="partnerAgeFrom"
                           star="true"
                           options={ageFromOptions}
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                     <div className="w-3/12">
                        <FormControl
                           control="select"
                           label="Age To"
                           name="partnerAgeTo"
                           star="true"
                           options={ageToOptions}
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                     <div className="w-3/12">
                        <FormControl
                           control="select"
                           label="Height From"
                           name="partnerHeightFrom"
                           star="true"
                           options={heightOptions}
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                     <div className="w-3/12">
                        <FormControl
                           control="select"
                           label="Height To"
                           name="partnerHeightTo"
                           star="true"
                           options={heightOptions}
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                  </div>


               </div>
               <div className='flex gap-x-3 w-full'>
                  <div className='w-1/3' >
                     <FormControl
                        control="select"
                        label="Nakshatram"
                        name="partnerNakshatram"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={nakshatrasOptions}
                     />
                  </div>
                  <div className='w-1/3' >
                     <FormControl
                        control="select"
                        label="Raashi "
                        name="partnerRaashi"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={raashiOptions}
                     />
                  </div>
                  <div className='w-1/3' >
                     <FormControl
                        control="input"
                        label="Gothram"
                        name="partnerGothram"
                        placeholder="Enter Gothram"
                        star="true"
                        inputStyles={`w-full text-black`}
                     />
                  </div>
               </div>
               <div className='flex gap-x-3 w-full'>
                  <div className='w-1/3' >
                     <FormControl
                        control="select"
                        label="Mother Tongue"
                        name="partnerMotherTongue"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={motherTongueOptions}
                     />
                  </div>
                  <div className='w-1/3' >
                     <FormControl
                        control="select"
                        label="Religion "
                        name="partnerReligion"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={religionOptions}
                     />
                  </div>
                  <div className='w-1/3' >
                     <FormControl
                        control="select"
                        label="Caste "
                        name="partnerCaste"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={casteDataOptions}
                     />

                  </div>
               </div>
               <div className='flex items-center  gap-x-4'>
                  <FormControl
                     control="radio"
                     label="Kuja Dosam "
                     name="partnerKujaDosam"
                     star="true"
                     inputStyles={`w-full text-black`}
                     options={kujaDosamOptions}
                  />

               </div>
               <div className='flex items-center  gap-x-4'>
                  <FormControl
                     control="radio"
                     label="Physical Status "
                     name="partnerPhysicalStatus"
                     star="true"
                     inputStyles={`w-full text-black`}
                     options={physicalStatusOptions}
                  />
               </div>
               <div className='flex items-center  gap-x-4'>
                  <FormControl
                     control="checkbox-group"
                     label="Complexion "
                     name="partnerComplexion"
                     star="true"
                     inputStyles={`w-full text-black`}
                     options={complexionOptions}
                  />
               </div>
            </div>
         </FormStep>
      </div>
   )
}

export default EightStep
