import React from 'react'

const Footer = () => {
   return (
      <footer className="bg-white pt-4 sm:pt-10 lg:pt-12">
         <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
               <div className="col-span-full lg:col-span-2">
                  <div className="mb-4 lg:-mt-2">
                     <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                        {/* <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg> */}

                        World Netha
                     </a>
                  </div>
                  <p className="mb-6 text-gray-500 sm:pr-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor eros, nec ullamcorper justo vestibulum nec. Donec arcu libero, aliquet ac mauris eget, finibus fermentum quam. Donec ultricies dictum mauris, vel imperdiet purus dictum sed.</p>
                  <div className="flex gap-4">
                     <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                     </a>

                     <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                     </a>

                     <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                     </a>

                     <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                     </a>
                  </div>

               </div>

               <div>
                  <div className="mb-4 font-bold tracking-widest text-gray-500">Sitemap</div>

                  <nav className="flex flex-col gap-4">
                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Home</a>
                     </div>

                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Featured male</a>
                     </div>

                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Featured Female</a>
                     </div>

                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Matched by Worldnetha</a>
                     </div>
                  </nav>
               </div>
               <div>
                  <div className="mb-4 font-bold tracking-widest text-gray-500">Search</div>
                  <nav className="flex flex-col gap-4">
                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Search by gender</a>
                     </div>

                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Search by age</a>
                     </div>

                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Search by qualification</a>
                     </div>

                     <div>
                        <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Search by marital status</a>
                     </div>
                  </nav>
               </div>

               <div className='flex flex-col gap-4'>
                  <div>
                     <div className="mb-4 font-bold tracking-widest text-gray-500">Pricing</div>
                     <nav className="flex flex-col gap-4">
                        <div>
                           <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Membership plans</a>
                        </div>
                     </nav>
                  </div>
                  <div>
                     <div className="mb-4 font-bold tracking-widest text-gray-500">Help</div>
                     <nav className="flex flex-col gap-4">
                        <div>
                           <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">Contact Us</a>
                        </div>
                        <div>
                           <a href="#" className="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-bold">FAQs</a>
                        </div>
                     </nav>
                  </div>
               </div>
               <div>
                  <div className="mb-4 font-bold tracking-widest text-gray-500">Follow us</div>
                  <div className="flex gap-4">
                     <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z" fill="#171717" />
                        </svg>

                     </a>

                     <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.067C0 18.033 4.51354 22.994 10.4167 24V15.333H7.29167V12H10.4167V9.333C10.4167 6.333 12.4302 4.667 15.2781 4.667C16.1802 4.667 17.1531 4.8 18.0552 4.933V8H16.4583C14.9302 8 14.5833 8.733 14.5833 9.667V12H17.9167L17.3615 15.333H14.5833V24C20.4865 22.994 25 18.034 25 12.067C25 5.43 19.375 0 12.5 0C5.625 0 0 5.43 0 12.067Z" fill="#171717" />
                        </svg>

                     </a>

                     <a href="#" target="_blank" className="text-gray-400 transition duration-100 mt-1 hover:text-gray-500 active:text-gray-600">
                        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M22.706 2.18952C21.871 2.55952 20.974 2.80952 20.031 2.92252C21.004 2.34031 21.7319 1.42398 22.079 0.344518C21.1648 0.887508 20.1643 1.26971 19.121 1.47452C18.4194 0.725384 17.4901 0.228845 16.4773 0.0619924C15.4646 -0.10486 14.4251 0.0673099 13.5202 0.551771C12.6154 1.03623 11.8958 1.80588 11.4732 2.74122C11.0505 3.67656 10.9485 4.72527 11.183 5.72452C9.33069 5.63151 7.51863 5.15007 5.86442 4.31142C4.21022 3.47278 2.75084 2.29568 1.581 0.856519C1.181 1.54652 0.951 2.34652 0.951 3.19852C0.950554 3.96551 1.13943 4.72076 1.50088 5.39725C1.86232 6.07374 2.38516 6.65056 3.023 7.07652C2.28328 7.05298 1.55987 6.8531 0.913 6.49352V6.55352C0.912925 7.62926 1.28503 8.6719 1.96618 9.50451C2.64733 10.3371 3.59557 10.9084 4.65 11.1215C3.96378 11.3072 3.24434 11.3346 2.546 11.2015C2.8435 12.1271 3.423 12.9365 4.20337 13.5164C4.98374 14.0963 5.92592 14.4177 6.898 14.4355C5.24783 15.7309 3.20989 16.4336 1.112 16.4305C0.740381 16.4306 0.369076 16.4089 0 16.3655C2.12948 17.7347 4.60834 18.4613 7.14 18.4585C15.71 18.4585 20.395 11.3605 20.395 5.20452C20.395 5.00452 20.39 4.80252 20.381 4.60252C21.2923 3.94349 22.0789 3.12741 22.704 2.19252L22.706 2.18952Z" fill="#171717" />
                        </svg>
                     </a>

                  </div>
               </div>

            </div>
         </div>
            <div className="bg-gray-100 ">
            <div className=" px-4 md:px-8 mx-auto max-w-screen-2xl">
                  <div className="flex items-center justify-between gap-4 py-8">
                     <span className="text-sm text-gray-400">Copyright © 2024 - WorldNetha. All rights reserved. </span>

                     <div className="flex gap-4">
                        <p className='text-gray-400'>040-8568-8956</p>
                        <p className='text-gray-400'>worldnetha@gmail.com</p>

                     </div>
                  </div>
               </div>
            </div>
      </footer>
   )
}

export default Footer
