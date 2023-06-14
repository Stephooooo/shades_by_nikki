import React from 'react'
import QuoteCard from '../components/quoteCard';
import Footer from '../components/footer';
import {AiOutlineMail} from 'react-icons/ai';
import { BsInstagram} from "react-icons/bs";
import {BsWhatsapp} from 'react-icons/bs';
import { BsFacebook} from "react-icons/bs";
import { FaTiktok} from "react-icons/fa";
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';


function ContactUs () {
  return (
    <div>
    
    <div className=' md:h-[200px] lg:h-[300px] w-full pb-5 pt-5 bg-black'>
    <div className='relative'>
    <h1 className='text-gold text-[20px] font-bold pt-10 ml-4 '> CONTACT INFORMATION </h1>
    <h1 className='text-white text-[25px] font-bold ml-4'> We are happy to hear from you!</h1>
    <div className='bg-white rounded-md mx-5 mt-20 pb-10 drop-shadow-xl'>

    <div className='md:columns-1 lg:columns-2'>

    <div>
    <img src='../img/logo.png' className='w-100 h-100 pt-10 ml-5' alt="Logo" />
    </div>
    
    <div className='ml-5'>
    <br/>
    <br/>
    <br/>
    <h1 className='text-black pt-5 font-bold text-[25px] mb-2'> Contact us </h1>
    <div className='flex space-x-2'>
    <BsWhatsapp className='text-gold'  />
     <h1 className='text-black font-semibold'> WhatsApp   </h1> 
     </div>
     <a href='whatsapp://send?text=Your%20message%20here&phone=+254722679984' className=' hover:text-gold'> +254722679984 </a>

     <div className='flex space-x-2 mt-2'>
     <AiOutlineMail className='text-gold'/> 
     <h1 className='text-black font-semibold'> Email Address  </h1>
     </div>
     <a href='mailto:nicoleandy904@gmail.com' className=' hover:text-gold'> nicoleandy904@gmail.com </a>




     <h1 className='text-black pt-2 font-bold text-[25px] mb-2'> You can find us on our social media platforms </h1>

     <div className='flex space-x-2 mb-2'>
     <BsInstagram className='text-gold'/> 
     <a href='https://www.instagram.com/shades_by_nikki/' className='hover:text-gold'> Shades_by_nikki </a>
    </div>

    <div className='flex space-x-2 mb-2'>
    <BsFacebook className='text-gold'/> 
    <a href='https://www.facebook.com/shades_by_nikki/'  className=' hover:text-gold'> Shades_by_nikki </a>
    </div>

    <div className='flex space-x-2 mb-2' > 
    <FaTiktok className='text-gold' /> 
    <a href='https://www.tiktok.com/search?q=nikki_shades&t=1683567766199'  className=' hover:text-gold'> nikki_shades </a>
    </div>

    <div className='flex space-x-2 mb-2'> 
    <BsLinkedin className='text-gold' /> 
    <a href='https://www.linkedin.com/in/andy-nicole-01a047177/'  className=' hover:text-gold'> andy-nicole </a>
    </div>

    <div className='flex space-x-2 mb-2'> 
    <BsTwitter className='text-gold' /> 
    <a href='https://twitter.com/shadesbynikki'  className=' hover:text-gold'> shadesbynikki </a>
    </div>
    

    </div>

    </div>    
    </div>
    </div>
    <div className='mt-5'>
    <QuoteCard/>
    </div>
    <Footer/>
    </div>

   
    </div>
  )
}

export default ContactUs 