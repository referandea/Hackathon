import UAuth from '@uauth/js'
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import React from 'react'
import logo from '../../logo.svg';

import {ReactComponent as ReactLogo} from '../../login.svg';

const Navbar = () => {

  const [label, setLabel] = useState();

  const navigate = useNavigate();
 
  const uauthOptions = new UAuth ({
    clientID: "1137ff52-041d-42d6-87f5-57dfd8e3eef9",
    redirectUri: "http://localhost:3000/",
    scope: "openid wallet "
  }) ;
  const userlog=JSON.parse(localStorage.getItem("user"));
 
 
   

   async function Login()  {
 
    if(!userlog){
    const authorization = await uauthOptions.loginWithPopup()
    
    localStorage.setItem("user", JSON.stringify(authorization));
    const userinfo=JSON.parse(localStorage.getItem("user"));
    navigate(`/dashboard/${userinfo.idToken.wallet_address}`)
    }
    else
  {
    localStorage.clear();
  
    navigate(`/`)
   
  }
  }
console.log(userlog)
  return (
    <nav className='w-full flex justify-between  items-center'>
    <div className='flex justify-between w-full h-14  mt-4 py-2 px-4 items-center'>
      <div className='flex items-center justify-center    '><a href='/' className='flex items-center justify-center ml-5'>
        <img src={logo} alt=''/><h1 className='w-[100px] h-auto font-bold text-center text-3xl '>Nft </h1> </a></div>
    <div> 
   <div className='relative'>

   {
   userlog ? (<button  onClick={Login} className='group  bg-blue-700  relative text-white font-bold  mt-5'><p className=' border solid hover:bg-blue-900 py-2 px-3  bg-blue-900   cursor-pointer flex  justify-center items-center'>  <ReactLogo  className='w-14 h-14 p-2'/><span >{userlog.idToken.sub}</span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
   <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
 </svg></p>
    
    </button>):(<button onClick={Login} className=' bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-2 w-auto mt-2  cursor-pointer text-center flex justify-center items-center '><ReactLogo  className='w-14 h-14 p-2'/><span className='hidden md:block'>Connect unstoppabledomains</span> </button>
    )}
   </div>
      
    </div>
       
       </div>
  </nav>
  )
}

export default Navbar