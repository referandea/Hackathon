import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../Component/Navbar'

import Search from '../Component/Search'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import defaultimg from '../../src/NFT.png'
import Card from '../Component/Card'
import { useState, useRef, useEffect } from "react";

const Dashboard = () => {
  const scrollRef = useRef(null);
  
  const  { rem } = useParams();
    const [data, setData] = useState([]);
    const [totalnft, setTotanft] = useState();
    const [totalbalance, setTotalbalance] = useState();
    const token= process.env.REACT_APP_API_KEY;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  const url1=`https://pregod.rss3.dev/v0.4.0/account:${rem}@ethereum/notes?tags=NFT&exclude_tags=POAP&limit=500` ;
 
    const url=`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/account/${rem}`;
    
   
    useEffect(() => {
 
    
      async function retrieveObjectData() {
        await axios.get(url1)
        .then((response) => {
          console.log(response.data)
          setData(response.data.list);
          setTotanft(response.data.total);

         
        })
        .catch((err) => {
          console.log(err);
        });
       
        
       
      }
      retrieveObjectData();

    }, [])
    useEffect(() => {
 
    
      async function retrieveObjectData1() {
        await axios.get(url,config)
        .then((response) => {
          
         console.log(response.data)
          setTotalbalance(response.data[0].confirmed_balance);

          
        })
        .catch((err) => {
          console.log(err);
        });
       
        
       
      }
      retrieveObjectData1();

    }, [])
console.log(data)
    function img(text){
      if(typeof text !== 'undefined' ){
        var ay= text.substring(0,7);
      if(ay==="ipfs://")
      {

        return (text.replace("ipfs://", "https://ipfs.io/ipfs/"))
      }
      else{return text}
    }
    
    else{
      return defaultimg
     
    }
  }

  return (
    <div>
<Navbar />
<div className=' h-[70vh] w-full relative  '>
      <div className='absolute flex justify-center h-20 w-full mt-[400px] border-b-2 border-zinc-500  py-4 rounded-b-lg '>
      <div className='flex w-1/4 justify-center border-r-4 font-bold'>ETH Balance: <span>{totalbalance}</span></div>
      <div className='flex w-1/4   '>
      <div className='flex w-full justify-center border-r-4 font-bold'>Total NFT:  <span>{totalnft}</span></div>
      </div>
      <div className='flex   w-2/4 '>
      <div className='flex w-full justify-center  font-bold text-center' > Address: <span>{rem}</span></div>
      
      </div>
      </div>
      </div>
      <div className='flex w-full justify-center '>
        <h1 className='   font-bold py-2 text-center font-sans'>List Of Your NFTs</h1>
       
      </div>
     
      <hr className='ml-[10%] w-[80%] '/>
      <div className='grid grid-cols-3 container ml-[10%] content-center ' ref={scrollRef}>
      {
      data? data.map((dats,index)=>{return(<div key={index}> 
  
        <Card name={!dats.title?"Unknown Title": dats.title} image={!dats.attachments ? defaultimg : img(dats.attachments[0].address)} ></Card></div>)}):<h1>NFTS Not found</h1>}
  
       </div>
    
       
<div className='w-[80%] m-4 '>

    </div>
    </div>

  )
}

export default Dashboard