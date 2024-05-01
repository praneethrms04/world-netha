'use client'
import FormControl from '@/app/components/ui/FormControl'
import { brothersDataOptions, citizenshipDataOptions, sistersDataOptions, stateDataOptions } from '@/app/utils/options'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import citiesData from "../../../../app/utils/options/state_cities.json"
import { Button } from '@/app/components/ui/Button'
import { getCurrentUser } from '@/app/lib/getCurrentUser'
import { getDatabase, set } from 'firebase/database'
import app from '@/app/firebaseConfig'
import { ref } from 'firebase/database'
import { toast } from 'react-toastify'
import Selector from '@/app/components/ui/Selector'
import { Country, State, City } from 'country-state-city';
// import citiesData from "../../utils/options/state_cities.json"

const FamilyInformation = () => {





   // const [state, setState] = useState('')
   const [userData, setUserData] = useState({})
   const [dateOfBirth, setDateOfBirth] = useState(userData.dateOfBirth || "")
   const [profileId, setProfileId] = useState()


   let countryData = Country.getAllCountries();
   let partnerCountryData = Country.getAllCountries();

   const [stateData, setStateData] = useState();
   const [cityData, setCityData] = useState();

   const [partnerStateData, setPartnerStateData] = useState();
   const [partnerCityData, setPartnerCityData] = useState();

   const [country, setCountry] = useState();
   const [state, setState] = useState();
   const [city, setCity] = useState();

   const [partnerCountry, setPartnerCountry] = useState();
   const [partnerState, setPartnerState] = useState();
   const [partnerCity, setPartnerCity] = useState();

   useEffect(() => {
      if (!partnerCountry) {
         setPartnerCountry(userData.partnerCountry)
      }
      if (!country) {
         setCountry(userData.country)
      }
   }, [userData.country, userData.partnerCountry])

   useEffect(() => {
      setStateData(State.getStatesOfCountry(country?.isoCode));
   }, [country]);

   useEffect(() => {
      if (userData?.country?.isoCode === country?.isoCode) {
         stateData && setState(userData.state);
      } else {
         stateData && setState(stateData[0]);
      }
   }, [stateData, userData.state, country]);


   useEffect(() => {
      cityData && setCity(cityData[0]);
   }, [cityData]);

   useEffect(() => {
      setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
   }, [state]);

   useEffect(() => {
      if (partnerCountry && partnerCountry.isoCode) {
         setPartnerStateData(State.getStatesOfCountry(partnerCountry.isoCode));
      }
   }, [partnerCountry]);

   useEffect(() => {
      partnerStateData && setPartnerState(partnerStateData[0]);
   }, [partnerStateData]);

   useEffect(() => {
      partnerCityData && setPartnerCity(partnerCityData[0]);
   }, [partnerCityData]);

   useEffect(() => {
      if (partnerCountry && partnerState) {
         setPartnerCityData(City.getCitiesOfState(partnerCountry.isoCode, partnerState.isoCode));
      }
   }, [partnerState, partnerCountry]);


   const fetchCurrentuser = async () => {
      const currentUser = await getCurrentUser()
      const { id, userObject } = currentUser
      setUserData(userObject)
      setProfileId(id)
      // setState(userObject.state || "")

   }

   useEffect(() => {
      fetchCurrentuser()
   }, [dateOfBirth])

   const initialValues = {
      firstName: userData.firstName || "",
      surname: userData.surname || "",
      email: userData.email || "",
      gender: userData.gender || "",
      maritalStatus: userData.maritalStatus || "",
      timeOfBirth: userData.timeOfBirth || "",
      placeOfBirth: userData.placeOfBirth || "",
      height: userData.height || "",
      nakshatram: userData.nakshatram || "",
      raashi: userData.raashi || "",
      gothram: userData.gothram || "",
      kujaDosam: userData.kujaDosam || "",
      complexion: userData.complexion || "",
      padam: userData.padam || "",
      // step 3
      motherTongue: userData.motherTongue || '',
      religion: userData.religion || "",
      caste: userData.caste || "",
      qualificationCategory: userData.qualificationCategory || "",
      qualificationDetails: userData.qualificationDetails || "",
      occupationCategory: userData.occupationCategory || "",
      occupationDetails: userData.occupationDetails || "",
      annualIncome: userData.annualIncome || "",
      physicalStatus: userData.physicalStatus || "",
      //step 4
      description: userData.description || "",
      // step 5
      fatherName: userData.fatherName || "",
      fatherOccupatiion: userData.fatherOccupatiion || "",
      motherName: userData.motherName || "",
      motherOccupatiion: userData.motherOccupatiion || "",
      noOfBrothers: userData.noOfBrothers || "",
      noOfSisters: userData.noOfSisters || "",
      // step 6
      citizenship: userData.citizenship || "",
      state: userData.state || "",
      city: userData.city || "",
      address: userData.address || "",
      contactNo: userData.contactNo || "",
      alternatephone: userData.alternatephone || "",
      familyDescriotion: userData.familyDescriotion || "",
      //step 7
      partnerQualificationCategory: userData.partnerQualificationCategory || "",
      partnerQualificationDetails: userData.partnerQualificationDetails || "",
      partnerOccupationCategory: userData.partnerOccupationCategory || "",
      partnerOccupationDetails: userData.partnerOccupationDetails || "",
      partnerCitizenship: userData.partnerCitizenship || "",
      partnerState: userData.partnerState || "",
      partnerCity: userData.partnerCity || "",
      //step 8
      partnerAgeFrom: userData.partnerAgeFrom || "",
      partnerAgeTo: userData.partnerAgeTo || "",
      partnerHeightFrom: userData.partnerHeightFrom || "",
      partnerHeightTo: userData.partnerHeightTo || "",
      partnerNakshatram: userData.partnerNakshatram || "",
      partnerRaashi: userData.partnerRaashi || "",
      partnerGothram: userData.partnerGothram || "",
      partnerMotherTongue: userData.partnerMotherTongue || '',
      partnerReligion: userData.partnerReligion || "",
      partnerCaste: userData.partnerCaste || "",
      partnerKujaDosam: userData.partnerKujaDosam || "",
      partnerComplexion: userData.partnerComplexion || "",
      partnerPhysicalStatus: userData.partnerPhysicalStatus || "",
      //step 9
      parterDescription: userData.parterDescription || "",
   };

   const updateFamilyInfo = (values) => {
      const data = {
         ...values,
         images: userData.images

      }
      const db = getDatabase(app)
      const updatedRef = ref(db, `users/${profileId}`)
      set(updatedRef, { ...data }).then(() => {
         toast.success('Profile updated successfully')
      }).catch((error) => {
         toast.error('error', error)
      })


   }

   return (
      <div>

         <div>
            <Formik
               initialValues={initialValues}
               onSubmit={updateFamilyInfo}
               enableReinitialize
            >
               {
                  (formikProps) => {
                     return (
                        <div>
                           <Form>
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

                                 <div className='w-full flex gap-x-3 '>
                                    <div className='w-1/3 ' >
                                       {
                                          country && (
                                             <>
                                                <label className='font-semibold' htmlFor="">Citizen of <span className='text-red-600'>*</span></label>
                                                <Selector data={countryData} selected={country} setSelected={setCountry} />
                                             </>
                                          )
                                       }
                                    </div>
                                    <div className='w-1/3' >
                                       {
                                          state && (
                                             <>
                                                <label className='font-semibold' htmlFor="">Native State <span className='text-red-600'>*</span></label>
                                                <Selector data={stateData} selected={state} setSelected={setState} />
                                             </>
                                          )
                                       }
                                    </div>
                                    <div className='w-1/3' >
                                       {
                                          city && (
                                             <>
                                                <label className='font-semibold' htmlFor="">Native City <span className='text-red-600'>*</span></label>
                                                <Selector data={cityData} selected={city} setSelected={setCity} />
                                             </>
                                          )
                                       }
                                    </div>
                                 </div>
                                 <div>
                                    <FormControl
                                       control="textarea"
                                       label="Complete Address"
                                       name="address"
                                       star="true"
                                       as="textarea"
                                       rows={2}
                                       cols={40}
                                       inputStyles={`w-full text-black`}
                                    />
                                 </div>
                                 <div className='w-full flex flex-row gap-x-3'>
                                    <div className='w-1/2'>
                                       <FormControl
                                          control="input"
                                          label="Contact No."
                                          name="contactNo"
                                          type="text"
                                          star="true"
                                          inputStyles={`w-full text-black`}
                                       />
                                    </div>
                                    <div className='w-1/2'>
                                       <FormControl
                                          control="input"
                                          label="Alternate No.(optional)"
                                          name="alternatephone"
                                          type="text"
                                          inputStyles={`w-full text-black`}
                                       />
                                    </div>
                                 </div>
                                 <div>
                                    <FormControl
                                       control="textarea"
                                       label="About Family"
                                       name="familyDescriotion"
                                       star="true"
                                       as="textarea"
                                       rows={2}
                                       cols={40}
                                       inputStyles={`w-full text-black`}
                                    />
                                 </div>
                                 <div className=' flex space-x-4 my-2'>
                                    <Button size="small" className="px-2 rounded-md"> Cancel</Button>
                                    <Button variant="gray" size="small" className="px-2 rounded-md text-sm" > Save Changes</Button>
                                 </div>
                              </div>
                           </Form>
                        </div>
                     )
                  }
               }
            </Formik>
         </div>
      </div>
   )
}

export default FamilyInformation
