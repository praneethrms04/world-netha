import React from 'react'
import { FormStep } from '../../ui/MultiStepForm'
import FormControl from '../../ui/FormControl'
import * as yup from 'yup'
import { genderOptions, maritalOptions } from '@/app/utils/options'

const FirstStep = () => {
   const stepOnevalidationSchema = yup.object({
      firstName: yup.string().required('First Name is required'),
      surname: yup.string().required('Surname is required'),
      email: yup.string().required('Email address is required'),
      password: yup.string().required('Password is required'),
      gender: yup.string().required('Gender is required'),
      maritalStatus: yup.string().required('Marital status is required'),

   })
   return (
      <div>
         <FormStep
            stepName='basic-info'
            // validationSchema={stepOnevalidationSchema}
            onSubmit={console.log('Step one submitted')}
         >
            <div
               className='flex flex-col gap-y-3'
            //  onSubmit={formikProps.handleSubmit}
            >

               <h3 className='pb-4'>Personal Information</h3>
               <div className='w-full flex flex-row gap-x-2 '>
                  <div className='w-1/2' >
                     <FormControl
                        control="input"
                        label="First Name"
                        name="firstName"
                        type='text'
                        star="true"
                        inputStyles='w-full text-black '
                        labelStyles='text-black'

                     />
                  </div>
                  <div className='w-1/2'>
                     <FormControl
                        control="input"
                        label="Surname"
                        name="surname"
                        type='text'
                        star="true"
                        inputStyles='w-full text-black '
                        labelStyles='text-black'
                     />
                  </div>
               </div>
               <div>
                  <div >
                     <FormControl
                        control="input"
                        label="Email"
                        name="email"
                        type='email'
                        star="true"
                        inputStyles='w-full text-black '
                        labelStyles='text-black'
                     />
                  </div>
               </div>
               <div>
                  <div >
                     <FormControl
                        control="input"
                        label="Password"
                        name="password"
                        type='password'
                        star="true"
                        inputStyles='w-full text-black '
                        labelStyles='text-black'
                     />
                  </div>
               </div>
               <div >
                  <div className='flex items-center  gap-x-4'>
                     <FormControl control="radio" label="Gender" name="gender" star={true} options={genderOptions} />
                  </div>
               </div>
               <div >
                  <div className='flex items-center  gap-x-4'>
                     <FormControl control="radio" label="Marital Status" name="maritalStatus" star={true} options={maritalOptions} />
                  </div>
               </div>
            </div>
         </FormStep>
      </div>
   )
}

export default FirstStep
