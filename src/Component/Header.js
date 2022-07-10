import { useState } from "react"
import React from 'react'
import { useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';

const Header = () => {
  const [address, setAddress] = useState([])
  const navigate = useNavigate()
  
    return (
    <div className=" ml-[30%]  mr-[30%] h-full    ">
      
      
  <form className=" container flex items-center justify-center   h-[600px]  ">   
  <TextField fullWidth  onChange={(e)=>{setAddress(e.target.value)}} id="outlined-basic" label="Enter Eth address" variant="outlined" />
 
   <button type='submit' className='border p-2 ml-1px    hover:bg-black  hover:text-white border-black rounded  z-10 textPrimary   font-medium h-14 w-16 ' onClick={(e)=>{navigate(`/dashboard/${address}`) }} >Search</button>
</form>

</div>

  )
}

export default Header