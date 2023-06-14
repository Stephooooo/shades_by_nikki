import React from 'react'
import { BsInstagram, BsTwitter} from "react-icons/bs";
import { BsFacebook} from "react-icons/bs";
import { FaTiktok} from "react-icons/fa";
import {BsWhatsapp} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer () {
  return (
    <div className=' bg-black pb-5 pt-5'>
    <div className='md:block lg:flex mx-4 lg:space-x-24'>

    <div className='mb-10'>
    <img src='../img/logo.png' className='w-100 h-20 mb-5' alt='logo'/>
    <div className="flex space-x-4">
   <button href='https://www.instagram.com/shades_by_nikki/'> <BsInstagram className='text-gold hover:text-white'/> </button> 
    <button href='https://www.facebook.com/shades_by_nikki/'> <BsFacebook className='text-gold hover:text-white'/> </button>
    <button href='https://www.tiktok.com/search?q=nikki_shades&t=1683567766199'> <FaTiktok className='text-gold hover:text-white' /> </button>
    <button href='https://www.linkedin.com/in/andy-nicole-01a047177/'> <BsLinkedin className='text-gold hover:text-white' /> </button>
    <button href='https://twitter.com/shadesbynikki'> <BsTwitter className='text-gold hover:text-white' /> </button>

    
    </div>
    </div>


    <div className='mt-10'>
    <button>
    <Link className='font-normal hover:font-bold text-[20px] text-gold hover:text-white ' to='/' > Our Services </Link>
    </button>
    </div>

    <div className='mt-10'>
    <button>
    <Link className='font-normal hover:font-bold text-[20px] text-gold hover:text-white ' to='/aboutUs'> About Us </Link>
    </button>
    </div>

    <div className='mt-10' >
    <button>
    <Link className='font-normal hover:font-bold text-[20px] text-gold hover:text-white ' to='/contactUs'> Contact Us </Link>
    </button>
    </div>

    <div className='mt-10 mb-5'>
    <button>
    <Link className='font-normal hover:font-bold text-[20px] text-gold hover:text-white  ' to='/gallery' > Gallery </Link>
    </button>
    </div>
    
    </div>
    <div className='border-t-2 border-gold ' >
    <p className="text-gold text-[15px] mt-5 ml-4" > ©  <span> Shades by Nikki. All rights reserved </span></p>
    </div>
    </div>
  )
}

export default Footer