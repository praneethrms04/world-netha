"use client"
import Image from "next/image";
import * as React from 'react'
import "./herosection.css"
import * as assets from "@/public/assets"
import QuickSearch from "../QuickSearch.jsx";


const HeroSection = () => {

   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };
   const [openLogin, setOpenLogin] = React.useState(false);

   const handleClickOpenLogin = () => {
      setOpenLogin(true);
   };

   return (
      <div >
         <section className="min-h-[93vh] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            <Image src={assets.mainbgImg} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
            <div className="relative flex flex-col gap-y-4 items-center bottom-12 p-4 sm:max-w-xl">
               <h1 className="mb-8 text-center  text-2xl  text-white xl:text-5xl md:mb-1  font-serif font-thin tracking-wider " style={{ fontStyle: 'oblique', }} >    Find love, find
                  happiness, find us.</h1>
               <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8  font-sans">Join a vibrant community where families unite, blessings flow, and love stories bloom like vibrant Indian flowers.</p>
            </div>
         </section>
         <div className="absolute bottom-12  w-full">
            <QuickSearch />
         </div>
      </div>
   )
}

export default HeroSection


