import React from 'react'

const Card = ({name,image}) => {
  return (
    
    <div  className="container bg-color mt-8 mb-8">
    
    <div className="bg-white   w-[220px] h-[300px] rounded-lg shadow-2xl   justify-center    p-1 transform transition duration-500 hover:scale-110">
      <img   src={image} alt='' className="w-[220px] h-[260px] rounded-t-lg md:rounded-l-lg    object-cover" />
      <div    className="p-1  flex justify-center ">
         <p   className="text-black align-middle">
        {name} <br></br>
        </p>
      </div>
      </div>
      </div>
    
  )
}

export default Card