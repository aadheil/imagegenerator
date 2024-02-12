import React, { useEffect } from 'react'
import { callpythonnapi } from './Services/allApi';

function Pythonapi() {
    const callpythonapi=async()=>{
        const res=await callpythonnapi()
        console.log(res);
    }
    useEffect(()=>{
        callpythonapi()
    },[])
  return (
    <>
    <h2>{res.data[0].video_title}</h2>
    <video controls width="400" style={{marginTop:'50px'}}>
                <source src={res.data[0].video_link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
    </>
  )
}

export default Pythonapi