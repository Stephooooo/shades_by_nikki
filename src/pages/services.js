import React from 'react'
import Buttons from '../components/buttons'
import Cards from '../components/cards'
import QuoteCard from '../components/quoteCard'
import Footer from '../components/footer'
import {HashLink} from "react-router-hash-link";


function Services() {
  return (
    <div>
    
    <div className=' relative'>
    <img src='../img/pic_1.jpg' alt='#' className=' md:h-[300px] lg:h-[450px] relative w-full'/>
    <div className='absolute left-4 top-1'>
    
    <h1 className='font-bold text-[30px]  text-white pt-20 '> Welcome to Shades by Nikki </h1>
   
    </div>
    </div>

    <div className='md:columns-1 lg:columns-2 mt-10 mx-4 mb-10 p-2'>
    <div>
    <h1 id="services" className='text-gold text-[20px] font-bold'> WHAT WE DO </h1>
    <h1 className='text-black text-[25px] font-bold'> Professional make-up and nail tech services</h1>
    </div>
    <div>
    <p className='text-black text-[20px] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>

    <div className=' grid md:grid-cols-1 lg:grid-cols-3 mx-4  flex-wrap mb-10'>

    <div className='mb-5'>
    <Cards
    description1="Quality team"
    description2="We have a dedicated team of professionals ready to match your vision."
    image="../img/pic_2.jpg"
    />
    </div>

    <div className='mb-5'>
    <Cards
    description1="Quality Products"
    description2="We use quality and credible make-up products that give you a nice finishing."
    image="../img/pic_3.jpg"
    />
    </div>

    <div className='mb-5'>
    <Cards
    description1="Quality experience"
    description2="We leave you feeling confident and ready to own your day! anyday!"
    image="../img/pic_4.jpg"
    />
    </div>


    </div>

<QuoteCard/>
<Footer/>
    </div>
  )
}

export default Services