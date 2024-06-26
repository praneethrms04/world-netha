
'use client'
import { Field, Formik } from 'formik'
import React, { useEffect, useState, useCallback } from 'react'
import { getDownloadURL, storage, getStorage, ref as storageRef, uploadBytes, uploadBytesResumable } from 'firebase/storage';

import { Button } from '../ui/Button'
import * as yup from 'yup'
import FormControl from '../ui/FormControl'
import citiesData from "../../utils/options/state_cities.json"
import { annualIncomeDataOptions, brothersDataOptions, casteDataOptions, citizenshipDataOptions, complexionOptions, genderOptions, heightOptions, kujaDosamOptions, maritalOptions, motherTongueOptions, nakshatrasOptions, occupationDataOptions, padamOptions, partnerOccupationDataOptions, partnerQualificationDataOptions, physicalStatusOptions, placeOfBirthOptions, qualificationDataOptions, raashiOptions, religionOptions, sistersDataOptions, stateDataOptions, timeOfBirthOptions } from '@/app/utils/options'
import MultiStepForm, { FormStep } from '../ui/MultiStepForm'
import { getDatabase, push, ref, set } from 'firebase/database'
import { useDropzone } from 'react-dropzone'
import ImagePreView from '../profile/ImagePreView'
import { IoCloudUploadOutline } from "react-icons/io5";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import app, { auth } from '@/app/firebaseConfig'
import FirstStep from './steps/FirstStep';
import ThirdStep from './steps/ThirdStep';
import FourthStep from './steps/FourthStep';
import FifthStep from './steps/FifthStep';
import EightStep from './steps/EightStep';
import NinthStep from './steps/NinthStep';
import { toast } from 'react-toastify';
import Selector from '../ui/Selector';
import { Country, State, City } from 'country-state-city';

const Register = (props) => {

   const { setOpenLogin, openLogin, setOpenRegister, openRegister } = props
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
         setPartnerCountry(partnerCountryData[0])
      }
      if (!country) {
         setCountry(countryData[0])
      }

   }, [])

   useEffect(() => {
      setStateData(State.getStatesOfCountry(country?.isoCode));
   }, [country]);

   useEffect(() => {
      stateData && setState(stateData[0]);
   }, [stateData]);

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








   // const [dateOfBirth, setDateOfBirth] = useState('')

   const [citiesOptions, setCitiesOption] = useState([])
   const [partnerCitiesOptions, setPartnerCitiesOption] = useState([])
   const [files, setFiles] = useState([])
   const [imageUrls, setImageUrls] = useState([])


   const [successModal, setSuccessModal] = useState(true)

   const { acceptedFiles, getRootProps, getInputProps, } = useDropzone({
      disabled: false,
      noDrag: false,
      onDrop: (acceptedFiles) => {
         const formattedFiles = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)

         }))
         setFiles((prevFiles) => [...prevFiles, ...formattedFiles])
      }
      // onDrop: (acceptedFiles) => {
      //    // Upload files to Firebase Storage and store their URLs in the database
      //    acceptedFiles.forEach(async (file) => {
      //       const storageRef = ref(storage, 'userImages/' + file.name);
      //       await uploadBytes(storageRef, file);
      //       const downloadURL = await getDownloadURL(storageRef);

      //       // Add the image URL to the files array
      //       setFiles((prevFiles) => [...prevFiles, downloadURL]);
      //    });
      // }

   })



   const thumbs = files.map((file) => {
      return (
         <div className='flex fle-row gap-2 '>
            <ImagePreView file={file} />
         </div>
      )
   })


   const initialValues = {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      gender: "",
      maritalStatus: "",
      dateOfBirth: "",
      timeOfBirth: "",
      placeOfBirth: "",
      height: "",
      nakshatram: "",
      raashi: "",
      gothram: "",
      kujaDosam: "",
      complexion: "",
      padam: "",
      adminPriority: false,
      // step 3
      motherTongue: '',
      religion: "",
      caste: "",
      qualificationCategory: "",
      qualificationDetails: "",
      occupationCategory: "",
      occupationDetails: "",
      annualIncome: "",
      physicalStatus: "",
      //step 4
      description: "",
      // step 5
      fatherName: "",
      fatherOccupatiion: "",
      motherName: "",
      motherOccupatiion: "",
      noOfBrothers: "",
      noOfSisters: "",
      // step 6
      citizenship: "",
      state: "",
      city: "",
      address: "",
      contactNo: "",
      alternatephone: "",
      familyDescriotion: "",
      //step 7
      partnerQualificationCategory: [],
      partnerQualificationDetails: "",
      partnerOccupationCategory: [],
      partnerOccupationDetails: "",

      //step 8
      partnerAgeFrom: "",
      partnerAgeTo: "",
      partnerHeightFrom: "",
      partnerHeightTo: "",
      partnerNakshatram: "",
      partnerRaashi: "",
      partnerGothram: "",
      partnerMotherTongue: '',
      partnerReligion: "",
      partnerCaste: "",
      partnerKujaDosam: "",
      partnerComplexion: "",
      partnerPhysicalStatus: "",
      //step 9
      parterDescription: "",

   }
   const stepOnevalidationSchema = yup.object({
      firstName: yup.string().required('First Name is required')
         .matches(/^[a-zA-Z\s]+$/, "Firstname should contain alphabets only")
         .max(15, "Must be 15 characters or below ")
         .min(3, "Must be 3 characters or above "),
      surname: yup.string().required('Surname is required')
         .matches(/^[a-zA-Z\s]+$/, "Surname should contain alphabets only")
         .max(15, "Must be 15 characters or below ")
         .min(3, "Must be 3 characters or above "),
      email: yup.string().required('Email address is required').email("Invalid email format"),
      password: yup.string().required('Password is required').min(6, "Password must be at least 6 characters"),
      gender: yup.string().required('Gender is required'),
      maritalStatus: yup.string().required('Marital status is required'),
   })

   const stepTwovalidationSchema = yup.object({
      dateOfBirth: yup.string().required('Date of Birth is required'),
      height: yup.string().required('Height is required'),
      kujaDosam: yup.string().required('kuja Dosam is required'),
      complexion: yup.string().required('Complexion status is required'),
   })
   const stepFiveValidationSchema = yup.object({
      fatherName: yup.string().required('Father Name is required'),
      fatherOccupatiion: yup.string().required('Occupation is required'),
      motherName: yup.string().required('Mother Name is required'),
      motherOccupatiion: yup.string().required('Occupation is required'),
      noOfBrothers: yup.string().required('Number of Brothers is required'),
      noOfSisters: yup.string().required('Number of Sisters is required'),

   })



   const handleFormSubmit = async (values) => {
      try {

         const date = values.dateOfBirth;
         const day = date.getDate().toString().padStart(2, '0');
         const month = (date.getMonth() + 1).toString().padStart(2, '0');
         const year = date.getFullYear().toString();
         const formattedDate = `${day}/${month}/${year}`;

         const data = {
            ...values,
            country: country,
            state: state,
            city: city,
            partnerCountry: partnerCountry,
            partnerState: partnerState,
            partnerCity: partnerCity,
            dateOfBirth: formattedDate,
            images: imageUrls
         };
         console.log(data)

         // Save user data to the database
         const db = getDatabase(app);
         const newUserRef = push(ref(db, 'users'));
         await set(newUserRef, data);

         // Sign up user with email and password
         const { email, password } = data;
         const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
         const user = userCredentials.user;
         toast.success("You have Successfully registered")
         setOpenRegister((prev) => !prev)
         setOpenLogin((prev) => !prev)
      } catch (error) {
         console.error('Error registering user:', error);
      }
   };


   const getPartnerCityOptions = (state) => {
      const res = citiesData.filter(cities => cities.State.toLocaleLowerCase() === state)
      const citiesObj = res.map((city) => {
         return {
            value: city.City,
            key: city.City.toLocaleLowerCase()
         }
      })
      setPartnerCitiesOption(citiesObj)
      document.getElementById('partnerState')
   }

   const getCityOptions = (state) => {
      const res = citiesData.filter(cities => cities.State.toLocaleLowerCase() === state)
      const citiesObj = res.map((city) => {
         return {
            label: city.City,
            value: city.City.toLocaleLowerCase()
         }
      })

      document.getElementById('state')
      setCitiesOption(citiesObj)
   }


   const selectstate = (e) => {
      setState(e.target.value)
      getCityOptions(e.target.value)
   }

   const partnerSelectstate = (e) => {
      setPartnerState(e.target.value)
      getPartnerCityOptions(e.target.value)
   }

   useEffect(() => {
      return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
   }, [])


   const handleMultipleUploads = async () => {
      const db = getDatabase(app);
      const imagesRef = ref(db, 'images');
      const imageUrls = [];
      try {
         for (const file of files) {
            const newImageRef = push(imagesRef);
            const imageId = newImageRef.key;
            const storage = getStorage(app);
            const imageStorageRef = storageRef(storage, `images/${imageId}`);
            const snapshot = await uploadBytes(imageStorageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            imageUrls.push(downloadURL);
         }
         await set(imagesRef, { imageUrls });
         setImageUrls(imageUrls)
         toast.success('All images uploaded successfully');
      } catch (error) {
         toast.error('Failed to upload images: ' + error.message);
      }
   };


   return (
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8 '>
         <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Register</h2>

         <MultiStepForm
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
         >

            <FormStep
               stepName='basic-info'
               validationSchema={stepOnevalidationSchema}
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
            <FormStep
               name="personal-information"
               // validationSchema={stepTwovalidationSchema}
               onSubmit={console.log('step2.onSubmit')}
            // validationSchema={validationStep2Schema}
            >
               <div className='flex flex-col gap-y-3'>
                  <h3 className='pb-2'>Personal Information</h3>
                  <div className='w-full flex flex-row gap-4 items-center'>
                     <div className='w-1/3'>
                        <FormControl
                           control="date"
                           label="Date of Birth"
                           star={true}
                           name="dateOfBirth"
                           inputStyles="w-full text-black"
                        />
                     </div>
                     <div className='w-1/3'>
                        <FormControl
                           control="select"
                           label="Time of Birth "
                           name="timeOfBirth"
                           inputStyles={`w-full text-black`}
                           options={timeOfBirthOptions}
                        />
                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="input"
                           type="text"
                           label="Place of Birth"
                           name="placeOfBirth"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                  </div>
                  <div className="w-full flex flex-row gap-4 items-center">
                     <div className='w-1/3'>
                        <FormControl
                           control="select"
                           label="Height "
                           name="height"
                           star="true"
                           inputStyles={`w-full text-black`}
                           options={heightOptions}
                        />
                     </div>

                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="Nakshatram"
                           name="nakshatram"
                           inputStyles={`w-full text-black`}
                           options={nakshatrasOptions}
                        />
                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="Raashi "
                           name="raashi"
                           inputStyles={`w-full text-black`}
                           options={raashiOptions}
                        />
                     </div>
                  </div>
                  <div className="w-full flex flex-row gap-4 items-center">
                     <div className='w-1/3'>
                        <FormControl
                           control="select"
                           label="Padam"
                           name="padam"
                           placeholder="Select padam"
                           inputStyles={`w-full text-black`}
                           options={padamOptions}
                        />
                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="input"
                           label="Gothram"
                           name="gothram"
                           placeholder="Enter Gothram"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                  </div>
                  <div className='flex items-center  gap-x-4'>
                     <FormControl
                        control="radio"
                        label="Kuja Dosam"
                        name="kujaDosam"
                        star="true"
                        options={kujaDosamOptions}
                     />
                  </div>
                  <div className='flex items-center  gap-x-4'>
                     <FormControl
                        control="radio"
                        label="Complexion"
                        name="complexion"
                        star="true"
                        options={complexionOptions}
                     />

                  </div>

               </div>
            </FormStep>
            <ThirdStep />
            <FourthStep />
            <FormStep
               name="address"
               onSubmit={console.log('step2.onSubmit')}
            // validationSchema={stepFiveValidationSchema}
            >
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
               </div>


            </FormStep>
            <FifthStep />
            <FormStep
               name="address"
               // validationSchema={stepSixValidationSchema}
               onSubmit={console.log('step2.onSubmit')}
            >
               <div className="flex flex-col gap-y-3">
                  <h3 className='pb-2'>Family Information</h3>
                  <div className='w-full flex gap-x-3 '>
                     <div className='w-1/3 ' >
                        <label className='font-semibold' htmlFor="">Citizen of <span className='text-red-600'>*</span></label>
                        <Selector data={countryData} selected={country} setSelected={setCountry} />
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

                        as="textarea"
                        rows={2}
                        cols={40}
                        inputStyles={`w-full text-black`}
                     />
                  </div>
               </div>
            </FormStep>
            <FormStep
               stepName='basic-info'
               // validationSchema={stepSevenValidationSchema}
               onSubmit={console.log('step2.onSubmit')}
            >
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
                     <div className='w-1/3'>
                        <label className='font-semibold' htmlFor="">Citizen of <span className='text-red-600'>*</span></label>
                        <Selector data={partnerCountryData} selected={partnerCountry} setSelected={setPartnerCountry} />
                     </div>
                     <div className='w-1/3'>
                        {
                           partnerState && (

                              <>
                                 <label className='font-semibold' htmlFor="">Native State <span className='text-red-600'>*</span></label>
                                 <Selector data={partnerStateData} selected={partnerState} setSelected={setPartnerState} />
                              </>
                           )
                        }


                     </div>
                     <div className='w-1/3'>
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

               </div>
            </FormStep>
            <EightStep />
            <FormStep
               stepName='basic-info'
               onSubmit={handleMultipleUploads}
            >
               <div
                  className='flex flex-col gap-y-3'
               //  onSubmit={formikProps.handleSubmit}
               >
                  <h3 className='pb-2'>Upload Your Images</h3>
                  <div className='w-full'>
                     <div {...getRootProps({ className: 'flex justify-center items-center border-2 border-dashed h-28 w-full cursor-pointer' })}>
                        <input {...getInputProps()} />
                        <div className='flex flex-col justify-center items-center'>
                           <IoCloudUploadOutline />
                           <p className='text-slate-400 text-sm'>(Add altleast 3 photos)</p>
                           <p>Drag 'n' drop some files here, or click to select files</p></div>
                     </div>
                     <aside className='flex flex-row gap-x-4 my-2'>
                        {thumbs}
                     </aside>
                  </div>

               </div>
            </FormStep>
            <NinthStep />
         </MultiStepForm>
         {/* 
         <ReactModal
            isOpen={successModal}
            onRequestClose={() => setSuccessModal(false)}
            className=" bg-white h-80 w-[500px] border rounded-md shadow-2xl border-[#726300]  flex justify-center items-center absolute translate-x-1/2 translate-y-1/2 top-1/4 left-1/4  px-3 py-3 backdrop-blur-md " >
            <div>
               <h1 className='text-center text-green-700'>Success</h1>            </div>
         </ReactModal> */}

      </div>
   )
}

export default Register
