import React from 'react'
import ReviewCards from '../components/reviewCards'
import Buttons from '../components/buttons'
import Footer from '../components/footer'

function AboutUs() {
  return (
    <div>

    <div className='md:columns-1 lg:columns-2 items-center bg-gold md:h-[200px] lg:h-[300px] w-full pb-5 pt-5'>
    <div className='mx-4'>
    <h1 className='text-black text-[20px] font-bold pt-10  '> ABOUT SHADES BY NIKKI </h1>
    <h1 className='text-black text-[25px] font-bold '> Our History, our founding story</h1>
    </div>
    <div className='mr-4 ml-4' >
    <p className='text-black text-[20px] font-normal pt-10'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>

    <div className='mx-4'>
    <h1 className='text-gold text-[20px] font-bold pt-10  '> OUR FOUNDER</h1>
    <h1 className='text-black text-[25px] font-bold '> Andy Nicole </h1>
    </div>

    <div className='md:columns-1 lg:columns-2  mx-4'>
    <div >
    <img src='../img/pic_5.jpg' alt='#' className='mt-2' />
    </div>
    <div>
    <p className='font-normal text-black text-[20px] '> Experience the artistry and expertise of my exceptional makeup artist skills with a mastery of diverse techniques and a meticulous attention to detail.<br/><br/>

    My team and I will skillfully enhance your natural beauty creating captivating looks that leave a lasting impression from flawless complexions to stunning eye makeup. <br/><br/>
    
    Every brushstroke is carefully executed to accentuate your features and bring your vision to life. <br/><br/>
    
    With a passion for personalized service and a commitment to your satisfaction, we ensure a trans-formative experience that will make you feel confident, radiant and truly unforgettable. </p>
    </div>
    </div>
    
    <div className='mx-10'>
    <h1 className='text-gold text-[20px] font-bold pt-10  '> OUR REVIEWS </h1>
    <h1 className='text-black text-[25px] font-bold '> What our customers are saying</h1>
    </div>

    <div className='md:columns-1 lg:columns-3  space-y-4 mt-5 mb-5'>

    <div> 
    <ReviewCards
    children="Jane Doe"
    image= "../img/pic_7.jpg"
    />
    </div>

    <div>
    <ReviewCards
    children="Sarah Doe"
    image= "../img/pic_8.jpg"
    />
    </div>

    <div>
    <ReviewCards
    children="Sharon Doe"
    image= "../img/pic_9.jpg"
    />
    </div>
    </div>
    
    <div className='relative'>
    <img src='../img/pic_10.jpg' className='w-full md:h-[300px] lg:h-[350px] '/>
    <div className='absolute left-4 top-1'>
    <h1 className='font-bold text-[20px] text-gold pt-10'> COMING SOON </h1>
    <h1 className=' text-[25px] text-white mb-4 mt-5 '>We are looking to launch a new blog section soon!
   <br/> For all things beauty, tips, hacks, trends, tutorials and so much more. <br/> Stay Tuned! </h1>
    

    </div>
    </div>

    <Footer/>
  



    </div>
  )
}

export default AboutUs