'use client'
import React, { useEffect, useState } from "react";
// import Register from "../Register/Register";
import Link from "next/link";
import { Button } from "../ui/Button";
import ReactModal from "react-modal";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import { userAuth } from "@/app/hooks/userAuth";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";
import Protected from "@/app/hooks/useProtected";

// import Login from "../Login/Login";

const Header = () => {
   const [openLogin, setOpenLogin] = useState(false);
   const [openRegister, setOpenRegister] = useState(false);
   const router = useRouter()

   const isAuthenticated = userAuth()

   const handleClickOpenLogin = () => {
      setOpenLogin((prev) => !prev);
      // setOpenRegister((prev) => !prev)
   };

   const handleClickOpenRegister = () => {
      setOpenRegister((prev) => !prev)
   }

   const handleLogOut = async () => {
      await signOut(auth)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logout successfully", { autoClose: 2000 })
      router.push("/")
      window.location.reload()
   }

   return (
      <div className="sticky z-10 top-0 shadow-lg">
         <div className="bg-white  ">
            <div className="mx-auto max-w-screen-2xl  sticky">
               <header className="flex items-center justify-between py-4 ">
                  <a href="/" className="inline-flex items-center ms-10 gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                     {/* <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                     </svg> */}
                     WorldNetha
                  </a>
                  {
                     isAuthenticated ?
                        (<div className="flex gap-x-2 items-center -ml-8 me-10">
                           <Button className="rounded-md px-2" variant="gray" size="small" onClick={handleLogOut} >LogOut</Button>
                           <Link href="/edit/photos" ><CgProfile className="w-8 h-8" />
                           </Link>

                        </div>)
                        :
                        (<div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start me-10">
                           <Button className="rounded-md" onClick={handleClickOpenLogin}>Login</Button>
                           <Button className="rounded-md" variant="gray" size="medium" onClick={handleClickOpenRegister} >Register</Button>
                        </div>)
                  }
                  <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                     </svg>
                  </button>
               </header>
            </div>
         </div>
         <ReactModal
            isOpen={openLogin}
            onRequestClose={() => setOpenLogin(false)}
            style={customStyles}
         >
            <Login openLogin={openLogin} setOpenLogin={setOpenLogin} openRegister={openRegister} setOpenRegister={setOpenRegister} />
         </ReactModal>

         <ReactModal
            isOpen={openRegister}
            onRequestClose={() => setOpenRegister(false)}
            style={customStyles}

         >
            <Register openLogin={openLogin} setOpenLogin={setOpenLogin} openRegister={openRegister} setOpenRegister={setOpenRegister} />
         </ReactModal>
         {/* <Login
            setOpen={setOpen}
            setOpenLogin={setOpenLogin}
            openLogin={openLogin}
         /> */}
         {/* <Register setOpen={setOpen} open={open} /> */}
      </div>
   );
}

export default Header;

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "750px",
      height: "550px",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
   },
};
