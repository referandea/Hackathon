import React  from 'react'
import Button from '@mui/material/Button';
import Img from '../nft.png';
import Logo from './ud-logo.svg';
import {useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import UAuth from '@uauth/js'

const Navbar = () => {


  
  const [User, setUser] = useState();
  const navigate = useNavigate();
  
  const [isLoggedIn, setisLoggedIn] = useState(false);
       const uauthOptions = new UAuth ({
        clientID: "1137ff52-041d-42d6-87f5-57dfd8e3eef9",
        redirectUri: "http://localhost:3000/",
        scope: "openid wallet "
      }) ;
 
 
  const handleLogin = async () => {
  
    if(!isLoggedIn){

  try {
    const authorization = await uauthOptions.loginWithPopup()
    setUser(authorization.idToken.sub)
   
    setisLoggedIn(isLoggedIn => !isLoggedIn)
   
    navigate(`/dashboard/${authorization.idToken.wallet_address}`)
  } catch (error) {
    alert(error)
  }
}
else
{
  await uauthOptions.logout()
  setisLoggedIn(isLoggedIn => !isLoggedIn)
  console.log(isLoggedIn)
  navigate(`/`)
}

  }

 
  return (
    <div className='w-full h-20 bg-white py-2   '>
      <div className=' flex justify-between   '>
        <div className='flex   w-full'>
        <img className="w-12 h-12 object-contain mt-2 ml-2 mr-2 px-1 py-1" src={Img} alt='logo'/>
        <h1 className='w-20 font-bold cursor-pointer text-4xl py-2'>Dashboard</h1>
        </div>
        <div className='flex   w-full  place-content-center'>
          { isLoggedIn 
        ?  (<div><span>{User}</span><button onClick = {handleLogin} className='hover:border-black w-auto h-14 p-4 border mt-2 mr-6 rounded font-medium  hover:bg-black flex  hover:text-white'>  Logout </button></div>) 
        :  (<div > <button onClick = {handleLogin} className='hover:border-black w-auto p-4 h-14 border mt-2 mr-6 rounded font-medium  hover:bg-black flex  hover:text-white'> Login with unstoppabledomains </button></div>) 
       
}
      
  </div>
  </div>
  </div>

  )
}

export default Navbar