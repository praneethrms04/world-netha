"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import RadioGroup from '../ui/RadioGroup'
import Dropdown from '../ui/Dropdown'

const RegisterOne = () => {


   const [selectGender, setSelectGender] = useState('')
   const [selectMaitalStatus, setSelectMaitalStatus] = useState('')

   const [dateOfBirth, setDateOfBirth] = useState('')
   const [selectedageOption, setSelectedageOption] = useState("4' 0\"");
   const [selectTimeOfBirth, setSelectedTimeOfBirth] = useState('')
   const [selectPlaceOfBirth, setSelectedPlaceOfBirth] = useState()
   const [selectNakshatra, setSelectedNakshatra] = useState('')
   const [selectPadam, setSelectedPadam] = useState('')
   const [selectRaashi, setSelectedRaashi] = useState('')
   const [selectMotherTongue, setSelectedMotherTongue] = useState('')
   const [selectKujadosam, setSelectedKujadosam] = useState('')
   const [selectComplexion, setSelectedComplexion] = useState('')


   const [selectCaste, setSelectedCaste] = useState('')


   const [currentStep, setCurrentStep] = useState(0)


   const genderOptions = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
   ];
   const maritalOptions = [
      { label: 'Unmarried', value: 'unmarried' },
      { label: 'Second Marriage', value: 'secondmarriage' }
   ];

   const kujaDosamOptions = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: "Don't know", value: 'donotknow' }
   ]

   const complexionOptions = [
      { label: 'Very fair', value: 'veryfair' },
      { label: 'Fair', value: 'fair' },
      { label: 'Whitish', value: 'whitish' },
      { label: 'Dark', value: 'dark' },
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

   const padams = ["1", "2", "3", "4"]

   const padamOptions = padams.map((pad, index) => ({
      value: index,
      label: pad,
   }))


   const timeOfBirthOptions = [
      { label: '9 AM', value: '9am' },
      { label: '10 AM', value: '10am' },
      { label: '11 AM', value: '11am' },
      { label: '12 PM', value: '12pm' },
   ]

   const placeOfBirthOptions = [
      { label: 'Vizag', value: 'vizag' },
      { label: 'Anatapur', value: 'anantapur' },
      { label: 'Puttaparthy', value: 'buttaparthy' },
      { label: 'Bangolore', value: 'bangalore' },
   ]

   const nakshatras = [
      "Ashwini", "Bharani", "Kruthika", "Rohini", "Mrigashira", "Arudra",
      "Punarvasu", "Pushyami", "Ashlesha", "Makha", "Pubba (Purva Phalguni)",
      "Uttara (Uttara Phalguni)", "Hastha", "Chittha", "Swathi", "Vishaka",
      "Anuradha", "Jyesta", "Moola", "Purvashada", "Uttarashada", "Shravana",
      "Dhanishta", "Shatabhisha", "Purvabhadra", "Uttarabhadra", "Revati"
   ];

   const nakshatrasObjects = nakshatras.map(nakshatra => {
      return {
         label: nakshatra,
         value: nakshatra.toLowerCase()
      };
   });

   const raashiData = [
      "Mesham",
      "Vrushabam",
      "Midhunam",
      "Karkatakam",
      "Simham",
      "Kanya",
      "Tula",
      "Vruchikam",
      "Dhanusu",
      "Makaram",
      "Kumbam",
      "Meenam",
   ]

   const raashiOptions = raashiData.map((raashi) => {
      return {
         label: raashi,
         value: raashi.toLocaleLowerCase()
      }
   })

   const motherTonguedata = [
      "Arabic",
      "Bengali",
      "Bhojpuri",
      "English",
      "French",
      "Gujarati",
      "Hausa",
      "Hindi",
      "Iranian Persian",
      "Italian",
      "Japanese",
      "Javanese",
      "Korean",
      "Mandarin Chinese",
      "Marathi",
      "Portuguese",
      "Russian",
      "Spanish",
      "Standard German",
      "Tamil",
      "Telugu",
      "Turkish",
      "Urdu",
      "Vietnamese",
      "Western Punjabi",
      "Wu Chinese",
      "Yue Chinese",
   ]

   const motherTongueOptions = motherTonguedata.map((motherTongue) => {
      return {
         label: motherTongue,
         value: motherTongue.toLocaleLowerCase()
      }
   })

   const castesData = ["Hindu", "Muslim", "Christian"]
   const castesOptions = castesData.map((caste) => {
      return {
         label: caste,
         value: caste.toLocaleLowerCase()
      }
   })


   const handlegenderOptionChange = (event) => {
      setSelectGender(event.target.value);
   };
   const handlemaritalOptionChange = (event) => {
      setSelectMaitalStatus(event.target.value);
   };
   const handleKujadosamOptionChange = (event) => {
      setSelectedKujadosam(event.target.value)
   }
   const handleComplexionOptionChange = (event) => {
      setSelectedComplexion(event.target.value)
   }


   const gotoNext = () => {
      setCurrentStep(currentStep + 1)
      console.log(currentStep)
   }
   const gotoPrev = () => {
      setCurrentStep(currentStep - 1)
   }

   useEffect(() => { }, [currentStep])






   return (
      <div className="bg-white py-6 sm:py-8 ">
         <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Register</h2>
            <div className='flex justify-between'>

               <h4>New Profile Registration</h4>
               <h4>{currentStep === 0 ? 'Completed 0%' : 'Completed 10%'}</h4>

            </div>
            <h3 className='pb-4'>Personal Information</h3>

            <div className="mx-auto max-w-2xl rounded-lg border">
               {
                  currentStep === 2 && (
                     <div className="flex flex-col gap-4 p-4 md:p-8 ">
                        <div className='flex gap-x-3'>
                           <Input label="First Name" name="firstName" />
                           <Input label="Surname" name="surname" />
                        </div>
                        <div>
                           <Input label="Email" name="email" />
                        </div>
                        <div>
                           <Input label="Password" name="password" />
                        </div>
                        <div className='flex items-center  gap-x-4'>
                           <div> Gender</div>
                           <RadioGroup
                              options={genderOptions}
                              selectedOption={selectGender}
                              onChange={handlegenderOptionChange} />
                        </div>
                        <div className='flex items-center  gap-x-4'>
                           <div> Gender</div>
                           <RadioGroup
                              options={maritalOptions}
                              selectedOption={selectMaitalStatus}
                              onChange={handlemaritalOptionChange} />
                        </div>
                     </div>
                  )
               }
               {
                  currentStep === 1 && (
                     <div className="flex flex-col gap-4 p-4 md:p-8 ">

                        <div className='w-full flex flex-row gap-4 items-center'>
                           <div className='w-1/3'>
                              <label className="flex flex-col">
                                 <div>
                                    Date of Birth*
                                 </div>
                                 <input
                                    className="input-field border py-1.5 rounded-md"
                                    type="date"
                                    placeholder="Select date of birth"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                 />
                              </label>
                           </div>
                           <div className='w-1/3'>
                              <Input label="Age" name="age" type="text" />
                           </div>
                           <div className='w-1/3'>
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
                        </div>
                        <div className="w-full flex flex-row gap-4 items-center">
                           <div className='w-1/3'>
                              <div >
                                 <p className='font-semibold'> Time of Birth </p>
                              </div>
                              <Dropdown
                                 name="Select Time of Birth"
                                 selectedOption={selectTimeOfBirth}
                                 setSelectedOption={setSelectedTimeOfBirth}
                                 options={timeOfBirthOptions}
                                 className="w-[200px] "
                              />
                           </div>
                           <div className='w-1/3' >
                              <div >
                                 <p className='font-semibold'> Place of Birth </p>
                              </div>
                              <Dropdown
                                 name="Place of Birth"
                                 selectedOption={selectPlaceOfBirth}
                                 setSelectedOption={setSelectedPlaceOfBirth}
                                 options={placeOfBirthOptions}
                                 className="w-[200px] "
                              />
                           </div>
                           <div className='w-1/3' >
                              <div >
                                 <p className='font-semibold'> Nakshatram </p>
                              </div>
                              <Dropdown
                                 name="Select Nakshatram"
                                 selectedOption={selectNakshatra}
                                 setSelectedOption={setSelectedNakshatra}
                                 options={nakshatrasObjects}
                                 className="w-[180px] "
                              />
                           </div>
                        </div>
                        <div className="w-full flex flex-row gap-4 items-center">
                           <div className='w-1/3'>
                              <div >
                                 <p className='font-semibold'> Padam </p>
                              </div>
                              <Dropdown
                                 name="Select Padam"
                                 selectedOption={selectPadam}
                                 setSelectedOption={setSelectedPadam}
                                 options={padamOptions}
                                 className="w-[200px] "
                              />
                           </div>
                           <div className='w-1/3' >
                              <div >
                                 <p className='font-semibold'> Raasi </p>
                              </div>
                              <Dropdown
                                 name="Select Raashi"
                                 selectedOption={selectRaashi}
                                 setSelectedOption={setSelectedRaashi}
                                 options={raashiOptions}
                                 className="w-[180px] "
                              />
                           </div>
                           <div className='w-1/3' >
                              <Input label="Gothram" placeholder="Enter Gothram" />
                           </div>
                        </div>
                        <div className='flex items-center  gap-x-4'>
                           <div> Kuja Dosam</div>
                           <RadioGroup
                              options={kujaDosamOptions}
                              selectedOption={selectKujadosam}
                              onChange={handleKujadosamOptionChange} />
                        </div>
                        <div className='flex items-center  gap-x-4'>
                           <div> Complexion</div>
                           <RadioGroup
                              options={complexionOptions}
                              selectedOption={selectComplexion}
                              onChange={handleComplexionOptionChange} />
                        </div>
                     </div>
                  )
               }

               {
                  currentStep === 0 && (
                     <div className="flex flex-col gap-4 p-4 md:p-8 ">
                        <div className='w-full flex flex-row gap-4 items-center'>
                           <div className='w-1/3'>
                              <label className="flex flex-col">
                                 <div>
                                    Mother Tongue
                                 </div>
                                 <Dropdown
                                    name="Select Mother Age"
                                    selectedOption={selectMotherTongue}
                                    setSelectedOption={setSelectedMotherTongue}
                                    options={motherTongueOptions}
                                    className="w-[150px] "
                                 />
                              </label>
                           </div>
                           <div className='w-1/3'>
                              <label className="flex flex-col">
                                 <div>
                                    Religion
                                 </div>
                                 <Dropdown
                                    name="Select Mother Age"
                                    selectedOption={selectMotherTongue}
                                    setSelectedOption={setSelectedMotherTongue}
                                    options={motherTongueOptions}
                                    className="w-[150px] "
                                 />
                              </label>
                           </div>
                           <div className='w-1/3'>

                              <Input label="Caste" placeholder="caste" />
                           </div>

                        </div>


                        <div className='flex items-center  gap-x-4'>
                           <div> Complexion</div>
                           <RadioGroup
                              options={complexionOptions}
                              selectedOption={selectComplexion}
                              onChange={handleComplexionOptionChange} />
                        </div>
                     </div>
                  )
               }
               <div className='flex justify-between'>
                  {currentStep !== 0 &&
                     <Button variant="gray" onClick={gotoPrev}  >Previous</Button>
                  }
                  <Button variant="gray" onClick={gotoNext}  >Continue</Button>
               </div>
               <div className="flex items-center justify-center bg-gray-100 p-4">
                  <p className="text-center text-sm text-gray-500">You have an account? <a href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</a></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default RegisterOne
