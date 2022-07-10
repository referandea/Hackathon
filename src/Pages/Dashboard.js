import React from 'react'

import Navbar from '../Component/Navbar/Navbar';
import { useParams } from 'react-router-dom'
import {useEffect , useState} from 'react'
import axios from 'axios'
import Card from '../Component/Card/Card'


const Dashboard = ({User,setUser,setAddress,address}) => {
 
  const  { rer } = useParams();
    const [data, setData] = useState([])
    
    const token ='bd1bdXG5kqggCGyJJs9SeHJ1hM0BAJboMG26jz77tcFUWSg'
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
 
 
  
  
    const url=`https://ubiquity.api.blockdaemon.com/v1/nft/ethereum/mainnet/assets?wallet_address=${rer}&sort_by=name`;
    
   
    useEffect(() => {
    console.log(url)
          
      axios.get(url,config)
      .then((response) => {
        console.log(response.data.data)
        setData(response.data.data);
       
      })
      .catch((err) => {
        console.log(err);
      })
     
    }, [])

    console.log(data)
   
  return (
    <div>
      <Navbar />
    <div className=' h-[70vh] w-full relative  '>
      <div className='absolute flex justify-center h-20 w-full mt-[400px] border-b-2 border-zinc-500  py-4 rounded-b-lg '>
      <div className='flex w-1/3 justify-center border-r-4 font-bold'>Total Count:<span>50</span></div>
      <div className='flex w-2/3  '>
      
      <div className='flex w-full justify-center  font-bold text-center' > Your Wallet Address: <span>{rer}</span></div>
      </div>
      </div>
      </div>
      <div className='flex w-full justify-center '>
        <h1 className='   font-bold py-2 text-center font-sans'>List Of Your NFTs</h1>
      </div>
      <hr className='ml-[10%] w-[80%] '/>
      <div className='grid grid-cols-4 w-[80%] ml-[10%] content-center'>
      {data.map((dats,index)=>{return(<div key={index}> 
  
  <Card name={dats.name} image={`https://ubiquity.storage.blockdaemon.com/token/${dats.contract_address}/${dats.id}.jpeg`} ></Card></div>)})}
      </div>
      </div>
  );
}


export default Dashboard