import React from 'react'
import Footer from '../components/footer';

function Gallery() {
  return (
    <div>
    <div className=' md:h-[200px] lg:h-[300px] w-full pb-5 pt-5 bg-black'>
    <h1 className='text-gold text-[20px] font-bold pt-10 ml-4 '> GALLERY </h1>
    <h1 className='text-white text-[25px] font-bold ml-4'> Peek into our world!</h1>
    </div>

    <div className='md:columns-1 lg:columns-4 mx-4 mt-5 mb-5'>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_11.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_12.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_13.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_14.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_15.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_16.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_17.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_18.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_19.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_20.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_21.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_22.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_23.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_24.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_25.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_26.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_27.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_28.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_29.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_30.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_31.jpg' /></div>
    <div><img className='rounded-md shadow-md mb-5' src='../img/pic_32.jpg' /></div>

    </div>

    <Footer/>

    </div>
  )
}

export default Gallery