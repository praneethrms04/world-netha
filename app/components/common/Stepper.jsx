
import React from 'react'

const Stepper = () => {
   const steps = ['0', '10', '15', '20', '30', '40', '45', '50', '60', '80']
   return (
      <div >
         <div className='flex gap-4'>
            {
               steps.map((step, ind) => {
                  return (
                     <div className=''>
                        <p className='bg-indigo-200 round'> {step}</p>
                     </div>
                  )
               })
            }
         </div>


      </div>
   )
}

export default Stepper
