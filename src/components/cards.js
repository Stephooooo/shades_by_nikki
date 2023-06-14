import React from 'react'
import Buttons from './buttons'
import { Link } from 'react-router-dom'

function Cards({description1, description2, image}) {
  return (
    <div>
<div class="mx-10 bg-white rounded-lg drop-shadow-xl transform transition duration-500 hover:scale-110 border-gold border-opacity-60 border-l-2 border-b-2 border-r-2">
<div href="#">
    <img class="rounded-t-lg" src={image} alt="" />
</div>
<div class="p-5">
    <div href="#">
        <h5 class="mb-2 text-[25px] font-bold  dark:text-black">{description1}</h5>
    </div>
    <p class="mb-2 font-normal text-[20px] text-black">{description2}</p>
    <Link to= "/contactUs"> 
    <Buttons 
    children= "Request quote"
    />
    </Link>
    </div>  
</div>

    
    
    </div>
  )
}

export default Cards