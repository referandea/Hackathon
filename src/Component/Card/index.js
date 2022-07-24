import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const index = ({name,image}) => {
 
  return (
    <div >
       
       
   
   <div className='grid-1/3 animate-slide-fwd shadow-xl solid bg-red h-[340px] w-[320px]  mt-16 mb-6 hover:scale-110 hover:transform hover:duration-110 hover:z-10'>
      <div className='  rounded-xl  relative '>
     <img alt={name} className=' w-[320px] rounded-tr-xl rounded-tl-xl h-[300px] object-cover hover:z-10' src={image}></img>
</div>
<div className='absolute lg:flex  items-center justify-center  '>
  <h4 className='w-full font-bold text-xl text-center py-1   overflow-hidden '>{name}</h4>
   </div>
   </div>   
   </div>
   
   
  )
}

export default index