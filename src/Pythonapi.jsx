import React, { useEffect, useState } from 'react'
import { callpythonnapi } from './Services/allApi';

function Pythonapi() {
    const[apidata,setapidat]=useState()
    const callpythonapi=async()=>{
        const res=await callpythonnapi()
        setapidat(res)
        console.log(res);
    }
    useEffect(()=>{
        callpythonapi()
    },[])
  return (
    <>
    <h2>{apidata?.data[0].video_title}</h2>
    <video controls width="400" style={{marginTop:'50px'}}>
                <source src={apidata?.data[0].video_link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
    </>
  )
}

export default Pythonapi