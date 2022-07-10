import React  from 'react'
import Button from '@mui/material/Button';
import Img from '../nft.png';
import Logo from './ud-logo.svg';
import {useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import UAuth from '@uauth/js'

const Navbar = () => {


  
 
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [intext,setIntext]= useState('Login with unstoppabledomains ');
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
       const uauthOptions = new UAuth ({
        clientID: "1137ff52-041d-42d6-87f5-57dfd8e3eef9",
        redirectUri: "http://localhost:3000/",
        scope: "openid wallet "
      }) ;

      useEffect(() => {
       if(isLoggedIn){
        
        setIntext('Logout')
       }
       else{
        setIntext('Login with unstoppabledomains' )
       }
      }, [isLoggedIn])
      const handleLogin = async () => {
  
        if(isLoggedIn){
     await uauthOptions.logout()
     setisLoggedIn(isLoggedIn => !isLoggedIn)
     setUser('')
      navigate(`/`)
      
      
    }
    else
    {
     try {
        const authorization = await uauthOptions.loginWithPopup()
        
        setUser(authorization.idToken.sub)
       
        
    
        navigate(`/dashboard/${authorization.idToken.wallet_address}`)
        setisLoggedIn(isLoggedIn => !isLoggedIn)
      } catch (error) {
        alert(error)
      }
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
         
        <div > <button onClick = {handleLogin} className='hover:border-black w-auto p-4 h-14 border mt-2 mr-6 rounded font-medium  hover:bg-black flex  hover:text-white'> {intext} </button></div>

      
  </div>
  </div>
  </div>

  )
}

export default Navbar
