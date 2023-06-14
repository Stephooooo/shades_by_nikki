import React from 'react'

function Buttons({children}) {
  return (
    <div>
    <button className='px-3 py-2 text-[15px] text-black bg-gold rounded-md hover:font-bold' >  {children} </button>
    </div>
  )
}

export default Buttons 