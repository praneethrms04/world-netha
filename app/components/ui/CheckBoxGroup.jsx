"use client"
import { Field, ErrorMessage } from 'formik'
import React from 'react'

const CheckBoxGroup = (props) => {
   const { name, label,star, options, ...rest } = props

   return (
      <div className=''>
         <div>
            <label className='font-semibold'>{label} {star && <span className='text-red-600'>*</span>} </label>
            <div className='w-full flex flex-wrap gap-2'>
               <Field name={name}  {...rest}>
                  {
                     ({ field }) => {
                        return options.map((option) => {
                           return (
                              <React.Fragment key={option.key} >
                                 <div className='flex gap-1'>
                                    <input
                                       type="checkbox"
                                       id={option.value}
                                       {...field}
                                       value={option.value}
                                       checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.value} </label>
                                 </div>
                              </React.Fragment>
                           )
                        })
                     }
                  }

               </Field>
            </div>
         </div>
         <ErrorMessage
            name={name}
            render={(msg) => {
               return <div className='text-red-400'>{msg}</div>;
            }}
         />
      </div>


   )
}

export default CheckBoxGroup
