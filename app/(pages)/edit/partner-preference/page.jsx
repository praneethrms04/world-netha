'use client'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import citiesData from "../../../../app/utils/options/state_cities.json"
import FormControl from '@/app/components/ui/FormControl'
import { ageFromOptions, ageToOptions, casteDataOptions, citizenshipDataOptions, complexionOptions, heightOptions, kujaDosamOptions, motherTongueOptions, nakshatrasOptions, occupationDataOptions, partnerOccupationDataOptions, partnerQualificationDataOptions, physicalStatusOptions, qualificationDataOptions, raashiOptions, religionOptions, stateDataOptions } from '@/app/utils/options'
import { Button } from '@/app/components/ui/Button'
import { getCurrentUser } from '@/app/lib/getCurrentUser'
import { getDatabase, ref, set } from 'firebase/database'
import app from '@/app/firebaseConfig'
import { toast } from 'react-toastify'
import { Country, State, City } from 'country-state-city'
import Selector from '@/app/components/ui/Selector'


const PartnerPreference = () => {

   const [partnerCitiesOptions, setPartnerCitiesOption] = useState([])


   const [profileId, setProfileId] = useState()
   const [userData, setUserData] = useState({})

   console.log(userData)
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
   console.log(partnerCountry)
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
      stateData && setState(userData.state || stateData[0]);
   }, [stateData]);

   useEffect(() => {
      cityData && setCity(userData.city || cityData[0]);
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
      if (userData?.partnerCountry?.isoCode === partnerCountry?.isoCode) {
         partnerStateData && setPartnerState(userData.partnerState);
      } else {
         partnerStateData && setPartnerState(partnerStateData[0]);
      }

   }, [partnerStateData, userData.partnerState, partnerCountry]);

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
   }

   useEffect(() => {
      fetchCurrentuser()
   }, [])

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
      address: userData.address || "",
      contactNo: userData.contactNo || "",
      alternatephone: userData.alternatephone || "",
      familyDescriotion: userData.familyDescriotion || "",
      //step 7
      partnerQualificationCategory: userData.partnerQualificationCategory || "",
      partnerQualificationDetails: userData.partnerQualificationDetails || "",
      partnerOccupationCategory: userData.partnerOccupationCategory || "",
      partnerOccupationDetails: userData.partnerOccupationDetails || "",
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

   const updatePartnerPreference = (values) => {
      const data = {
         ...values,
         country: userData.country,
         state: userData.state,
         city: userData.city,
         partnerCountry: partnerCountry,
         partnerState: partnerState,
         partnerCity: partnerCity,
         dateOfBirth: userData.dateOfBirth,
         images: userData.images
      }
      console.log(data)
      // const db = getDatabase(app)
      // const updatedRef = ref(db, `users/${profileId}`)
      // set(updatedRef, { ...data }).then(() => {
      //    toast.success("profile updated successfully")
      // }).catch((error) => {
      //    toast.error(`error ${error.message}  `)
      // })

   }


   return (
      <div>
         <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={updatePartnerPreference}
         >
            {
               (formikProps) => {
                  const { values } = formikProps
                  return (
                     <div>
                        <Form>
                           <div
                              className='flex flex-col gap-y-3'
                           //  onSubmit={formikProps.handleSubmit}
                           >
                              <h3 className='pb-2'>Partner Preferences</h3>
                              <div className='w-full flex gap-x-3'>
                                 <div className=' w-full'>
                                    <FormControl
                                       control="checkbox-group"
                                       label="Education category "
                                       name="partnerQualificationCategory"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={partnerQualificationDataOptions}
                                    />
                                 </div>
                              </div>
                              <div className='w-full flex gap-x-3'>
                                 <div className=' w-full'>
                                    <FormControl
                                       control="input"
                                       label="Education Details"
                                       name="partnerQualificationDetails"
                                       type='text'
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                 </div>
                              </div>
                              <div className='w-full flex gap-x-3'>
                                 <div className=' w-full'>
                                    <FormControl
                                       control="checkbox-group"
                                       label="Occupation category "
                                       name="partnerOccupationCategory"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={partnerOccupationDataOptions}
                                    />
                                 </div>
                              </div>
                              <div className='w-full flex gap-x-3'>
                                 <div className=' w-full'>
                                    <FormControl
                                       control="input"
                                       label="Occupation Details"
                                       name="partnerOccupationDetails"
                                       type='text'
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                 </div>
                              </div>

                              <div className='w-full flex gap-x-3 '>
                                 <div className='w-1/3 ' >
                                    {
                                       partnerCountry && (
                                          <>
                                             <label className='font-semibold' htmlFor="">Citizen of <span className='text-red-600'>*</span></label>
                                             <Selector data={partnerCountryData} selected={partnerCountry} setSelected={setPartnerCountry} />
                                          </>
                                       )
                                    }
                                 </div>
                                 <div className='w-1/3' >
                                    {
                                       partnerState && (
                                          <>
                                             <label className='font-semibold' htmlFor="">Native State <span className='text-red-600'>*</span></label>
                                             <Selector data={partnerStateData} selected={partnerState} setSelected={setPartnerState} />
                                          </>
                                       )
                                    }
                                 </div>
                                 <div className='w-1/3' >
                                    {
                                       partnerCity && (
                                          <>
                                             <label className='font-semibold' htmlFor="">Native City <span className='text-red-600'>*</span></label>
                                             <Selector data={partnerCityData} selected={partnerCity} setSelected={setPartnerCity} />
                                          </>
                                       )
                                    }
                                 </div>
                              </div>
                              <div className="flex flex-col gap-x-4">
                                 <div className='w-full flex gap-x-2' >
                                    <div className="w-3/12">
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
                                    control="checkbox-group"
                                    label="Complexion "
                                    name="partnerComplexion"
                                    star="true"
                                    inputStyles={`w-full text-black`}
                                    options={complexionOptions}
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
                              <div className=' flex space-x-4 my-2'>
                                 <Button size="small" className="px-2 rounded-md"> Cancel</Button>
                                 <Button type="submit" variant="gray" size="small" className="px-2 rounded-md text-sm" > Save Changes</Button>
                              </div>
                           </div>
                        </Form>
                     </div>

                  )
               }
            }
         </Formik>
      </div>
   )
}

export default PartnerPreference
