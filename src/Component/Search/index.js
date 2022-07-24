import React from 'react'
import {  useNavigate } from "react-router-dom";
import { useState } from 'react';

const Search = () => {

  
const [searchquery, setsearchQuery] = useState()

const navigate = useNavigate()

  function search (){
    navigate(`/dashboard/${searchquery}`)
  }
  return (
    <div> <div className='container    '>
     
    

    <div className='grid grid-col-3 '>
  <div className="w-full h-[80vh] ">
  <h1 className='text-5xl px-3 py-2 text-center font-extrabold  mt-[10%]'>Discover NFTs</h1> 
  <h1 className='text-5xl px-3 py-2 text-center font-extrabold  mt-10 mb-10'>& Track NFTs</h1>
  
          <form className='flex w-full justify-center'>
              <input required onChange={(e)=> setsearchQuery(e.target.value)} type="text" placeholder="Search Collections or Enter address" 
                  className="w-[40%] h-[80px] px-3 py-2 ml-10 rounded-tl-full rounded-bl-full border shadow-xl   focus:outline-0"></input>
              <button onClick={search} type="submit" className=" flex justify-center items-center w-[10%] h-[80px] px-3 py-2 -ml-1.5 bg-blue-500 hover:bg-blue-600 text-2xl shadow-xl text-white rounded-tr-full rounded-br-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg><span className='hidden md:block'>Search</span></button>
          </form>
      </div>
      </div>
    </div></div>
  )
}

export default Search