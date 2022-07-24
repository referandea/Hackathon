import React from 'react'
import Navbar from '../Component/Navbar'
import Search from '../Component/Search'

import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div > <Navbar />
    <Search />
    
    <div className='mt-16'>
  <Footer />
  </div>
 
    </div>
   
  
   
    
    
     
    
  )
}

export default Home