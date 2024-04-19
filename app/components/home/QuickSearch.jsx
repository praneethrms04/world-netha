'use client'
import * as React from 'react'
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import Dropdown from '../ui/Dropdown';

const genderOptions = [
   { value: 'male', label: 'Male' },
   { value: 'female', label: 'Female' },

];

const maritalOptions = [
   { value: 'single', label: 'Single' },
   { value: 'married', label: 'Married' },
   { value: 'diversed', label: 'Diversed' },
];

const qualificationsOptions = [
   {
      value: 'Abroad (MS/H1/GC/Citizen)',
      label: "Abroad (MS/H1/GC/Citizen)"
   },
   {
      value: 'Medical (MD/MBBS/BDS/MDS/BPT/MPT/M.Pharm/B.Pharm)',
      label: "Medical (MD/MBBS/BDS/MDS/BPT/MPT/M.Pharm/B.Pharm)"
   },
   {
      value: 'Engineering & MCA (BE/B.Tech/M.tech/MCA)',
      label: "Engineering & MCA (BE/B.Tech/M.tech/MCA)"
   },
   {
      value: 'Post Graduation (MBA/M.Sc/MA)',
      label: "Post Graduation (MBA/M.Sc/MA)"
   },
   {
      value: 'Graduation (B.Sc/B.Com/BA)',
      label: "Graduation (B.Sc/B.Com/BA)"
   },
   {
      value: 'Upto Intermediate',
      label: "Upto Intermediate"
   },
]


const heightData = [
   "4' 0\"",
   "4' 1\"",
   "4' 2\"",
   "4' 3\"",
   "4' 4\"",
   "4' 5\"",
   "4' 6\"",
   "4' 7\"",
   "4' 8\"",
   "4' 9\"",
   "4' 10\"",
   "4' 11\"",
   "5' 0\"",
   "5' 1\"",
   "5' 2\"",
   "5' 3\"",
   "5' 4\"",
   "5' 5\"",
   "5' 6\"",
   "5' 7\"",
   "5' 8\"",
   "5' 9\"",
   "5' 10\"",
   "5' 11\"",
   "6' 0\"",
   "6' 1\"",
   "6' 2\"",
   "6' 3\"",
   "6' 4\"",
   "6' 5\"",
   "6' 6\"",
   "6' 7\"",
   "6' 8\"",
   "6' 9\"",
   "6' 10\"",
   "6' 11\"",
   "7' 0\"",
];

const heightOptions = heightData.map((height, index) => ({
   value: index,
   label: height,
}));


const QuickSearch = () => {

   const [selectedGender, setSelectedGender] = React.useState(null);
   const [selectedageOption, setSelectedageOption] = React.useState("4' 0\"");
   const [selectedMarital, setSelectedMarital] = React.useState(null);
   const [selectedQualification, setSelectedQualification] = React.useState(null);

   return (
      <div className='max-w-screen-2xl mx-auto px-12'>
         <div className='bg-white text-black w-full  rounded-md flex flex-col gap-y-4 py-2'>
            <div>
               <h3 className='text-center'>Search</h3>
               <p className='text-center'>Find your match by values, passions, and dreams. Start searching now.</p>
            </div>
            <div className='flex  gap-4 lg:justify-evenly items-center px-6'>
               <div className='my-2'>
                  <div className=''>
                     <p className='font-semibold'> Looking for </p>
                  </div>
                  <Dropdown
                     name="Select gender"
                     selectedOption={selectedGender}
                     setSelectedOption={setSelectedGender}
                     options={genderOptions}
                     className="w-[180px] "
                  />
               </div>
               <div className='my-2'>
                  <div className=''>
                     <p className='font-semibold'> Age Range : </p>
                  </div>
                  <Input
                     type="number"
                     min="18"
                     placeholder="From"
                  />
               </div>
               <div className='my-2'>
                  <div className=''>
                     <p className='font-semibold'> To:</p>
                  </div>
                  <Input
                     type="number"
                     min="18"
                     placeholder="To "
                  />
               </div>
               <div className='my-2'>
                  <div className=''>
                     <p className='font-semibold'> Height </p>
                  </div>
                  <Dropdown
                     name="Select Age"
                     selectedOption={selectedageOption}
                     setSelectedOption={setSelectedageOption}
                     options={heightOptions}
                     className="w-[150px] "
                  />
               </div>
               <div className='my-2'>
                  <div className=''>
                     <p className='font-semibold'>Marital Status </p>
                  </div>
                  <Dropdown
                     name="Select Marital Status"
                     selectedOption={selectedMarital}
                     setSelectedOption={setSelectedMarital}
                     options={maritalOptions}
                     className="w-[150px] "
                  />
           
               </div>
               <div className='my-2'>
                  <div className=''>
                     <p className='font-semibold'>Qualification </p>
                  </div>

                  <Dropdown
                     name="Select Qualification"
                     selectedOption={selectedQualification}
                     setSelectedOption={setSelectedQualification}
                     options={qualificationsOptions}
                     className="w-[230px] "
                  />
               </div>
               <div className='my-2 mt-'>
                  <div className=' invisible'>hello</div>
                  <Button variant="gray" className="mb-2">Search</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default QuickSearch


