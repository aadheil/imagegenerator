import React, { useEffect, useState } from 'react'
import { callpythonnapi } from './Services/allApi';

function Pythonapi() {
    const[apidata,setapidat]=useState()
    var videolink
    const callpythonapi=async()=>{
        const res=await callpythonnapi()
        setapidat(res)
        videolink=res.data[0].video_link
        console.log(res);
    }
    useEffect(()=>{
        callpythonapi()
    },[])
  return (
    <>
    <h2>{apidata?.data[0].video_title}</h2>
    <video controls width="400" style={{marginTop:'50px'}}>
                <source src={videolink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
    </>
  )
}

export default Pythonapi