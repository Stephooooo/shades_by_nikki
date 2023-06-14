import React from 'react'

function ReviewCards({image, children}) {
  return (
    <div>
    <div className='mx-10 border-x-2 border-y-2 rounded-lg border-x-gray border-y-gray drop-shadow-xl transform transition duration-500 hover:scale-110  border-l-2 border-b-2 border-r-2 pb-5 pt-5'>
    <p className='text-[20px] text-black mx-4 italic'>“lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. “ </p>
    <div className='flex mt-5 ml-4 space-x-2'> 
    <img src={image} className='w-10 h-10 rounded-full' />
    <h1 className='text-[20px] text-black font-bold '> {children} </h1>
    </div>

    
    </div>
    </div>
  )
}

export default ReviewCards