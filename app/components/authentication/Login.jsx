
'use client'
import React from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Form, Formik } from 'formik'
import FormControl from '../ui/FormControl'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { auth } from '@/app/firebaseConfig'
import { toast } from 'react-toastify'

const Login = (props) => {

   const { setOpenLogin, openLogin, setOpenRegister, openRegister } = props

   const handleRegister = () => {
      setOpenRegister((prev) => !prev)
      setOpenLogin(false)
   }

   const router = useRouter()

   const initialValues = {
      email: "",
      password: ""
   }

   const handleLoginSubmit = async (values) => {
      try {
         const { email, password } = values
         const userCredentials = await signInWithEmailAndPassword(auth, email, password)
         const user = userCredentials.user
         localStorage.setItem('token', user.accessToken)
         localStorage.setItem('user', JSON.stringify(user))
         setOpenLogin(false)
         toast.success("Login successful")

      } catch (error) {
         console.log(error)

      }
   }

   return (
      <div className="bg-white py-6 sm:py-8 ">
         <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

            <div className="mx-auto max-w-lg rounded-lg border">
               <div className="flex flex-col gap-4 p-4 md:p-8">
                  <Formik
                     initialValues={initialValues}
                     onSubmit={handleLoginSubmit}
                  >
                     {
                        (formikProps) => {
                           return (
                              <Form>
                                 <div className='my-2'>
                                    <FormControl
                                       control="input"
                                       label="Email"
                                       type="email"
                                       name="email"
                                       labelStyles="w-full"
                                       inputStyles="w-full"
                                    />
                                 </div>
                                 <div className='my-2'>
                                    <FormControl
                                       control="input"
                                       label="Password"
                                       type="password"
                                       name="password"
                                       labelStyles="w-full"
                                       inputStyles="w-full"
                                    />
                                 </div>
                                 <div className='my-2'>
                                    <Button variant="gray" className="w-full"> Login</Button>
                                 </div>

                              </Form>
                           )
                        }
                     }
                  </Formik>

               </div>
               <div className="flex items-center justify-center bg-gray-100 p-4">
                  <p className="text-center text-sm text-gray-500">Don't have an account? <button onClick={handleRegister} className="text-[#726300] transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</button></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login
