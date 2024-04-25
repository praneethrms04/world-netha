"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const PhotoGallary = (props) => {
   const { images } = props;
   const [currentImage, setCurrentImage] = useState(0);

   const getCurrentImage = (ind) => {
      setCurrentImage(ind);
   };

   useEffect(() => { }, [currentImage]);

   return (
      <div>
         <div className='w-full flex flex-row px-3 py-1'>
            <div className='w-1/5 flex flex-col gap-y-4'>
               {images.map((image, ind) => (
                  <Image
                     key={ind}
                     alt="name"
                     src={image}
                     width={100}
                     height={100}
                     priority={true}
                     onClick={() => getCurrentImage(ind)}
                     className={`w-[7rem] h-[7rem] rounded-md cursor-pointer  object-cover ${currentImage === ind && 'scale-110 opacity-90'}`}
                  />
               ))}
            </div>
            <div className='w-4/5 flex justify-center items-center'>
               <Image
                  alt="name"
                  src={images[currentImage]}
                  width={150}
                  height={150}
                  priority={true}
                  className="w-[24rem] h-[25rem] rounded-md object-cover"
               />
            </div>
         </div>
      </div>
   );
};

export default PhotoGallary;

