import React from 'react'
import * as yup from 'yup'
import { FormStep } from '../../ui/MultiStepForm'
import FormControl from '../../ui/FormControl'

const FourthStep = () => {


   const stepFourValidationSchema = yup.object({
      description: yup.string().required('About Me is required'),
   })
  return (
    <div>
        <FormStep
           name="address"
           onSubmit={console.log('step2.onSubmit')}
        // validationSchema={stepFourValidationSchema}
        >
           <div className='flex flex-col gap-y-3'>
              <h3 className='pb-2'>Personal Information</h3>
              <div>
                 <FormControl
                    control="textarea"
                    label="About Me"
                    name="description"
                    as="textarea"
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

export default FourthStep
