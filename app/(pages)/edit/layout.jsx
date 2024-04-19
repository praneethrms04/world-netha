'use client'
import Link from 'next/link'
import { usePathname, } from 'next/navigation';
import Protected from '@/app/hooks/useProtected';
import React from 'react'

const UserLayout = ({ children, }) => {

   const pathname = usePathname()

   const links = [
      {
         id: 1,
         link: "/edit/photos",
         name: "Edit photos"
      },
      {
         id: 2,
         link: "/edit/personal-information",
         name: "Personal information",
      },
      {
         id: 3,
         link: "/edit/family-information",
         name: "Family information",
      },
      {
         id: 4,
         link: "/edit/partner-preference",
         name: "Partner preference",
      },
   ];

   return (
      <Protected>
         <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
            <div className='w-full flex flex-row space-x-3 '>
               <div className='w-3/12 my-4'>
                  <div className='flex flex-col space-y-3 px-4 py-4 border h-full rounded-md shadow-lg '>
                     <h4>Edit</h4>
                     {links.map((route) => {
                        return (
                           <Link key={route.id} href={route.link} className={pathname === route.link ? 'text-black font-semibold ' : 'text-gray-900'}>
                              {route.name}
                           </Link>)
                     }
                     )}
                  </div>
               </div>
               <div className='w-8/12 border shadow-lg px-4 py-4 my-4 '>
                  {children}
               </div>
            </div>
         </div>
      </Protected>
   );
};

export default UserLayout;
