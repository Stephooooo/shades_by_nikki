import React, { useState } from 'react';
import Buttons from './buttons';
import { Link } from 'react-router-dom';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <div className= 'w-full bg-black'>
   <div className="flex flex-wrap justify-between lg:space-x-12 mx-4 sticky top-0  ">
     <div>
       <img src="../img/logo.png" className=" w-100 h-20" alt="Logo" />
     </div>
     <div className="block lg:hidden mr-4">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-white hover:text-gold"
       >
         <svg
           className={`fill-white hover:fill-gold h-4 w-4 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-white hover:fill-gold h-4 w-4 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow  lg:flex lg:items-left lg:w-auto lg:space-x-24  ${isOpen ? "block" : "hidden"} `}
     >
       <div className="text-[15px] lg:flex-grow lg:space-x-24 space-y-4 mt-2 mb-2 float-left">
         <Link href="#" className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gold  " to= "/" >
           Our services
         </Link>
         <Link href="#" className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gold " to="/aboutUs" >
           About us
         </Link>
         <Link href="#" className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gold " to="/gallery">
           Gallery
         </Link>
         <div className='block mt-2  lg:inline-block lg:mt-0 text-white hover:text-gold'>
         <Link to="/contactUs">
         <Buttons 
         children= "Contact us"
         />
         </Link>

       </div>
       </div>
       
     </div>
   </div>
   </div>
 );
}
export default Navbar;