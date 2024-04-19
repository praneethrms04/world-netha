
"use client"

import React from 'react'
import { Button } from '../ui/Button'

const CallToAction = () => {
   return (
      <div className="bg-[#0C1617] py-2 md:py-3 lg:py-4">
         <div >
            <div className="flex flex-wrap lg:justify-evenly gap-x-12 lg:gap-x-60 rounded-lg text-white p-4 sm:flex-row md:p-8">
               <div>
                  <h2 className="text-white font-thin tracking-widest">Your story is waiting to happen!</h2>
               </div>
               <Button variant="gray">Register</Button>
            </div>
         </div>
      </div>
   )
}

export default CallToAction
