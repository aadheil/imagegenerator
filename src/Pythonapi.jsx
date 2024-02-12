import React from 'react'
import { callpythonnapi } from './Services/allApi';

function Pythonapi() {
    const callpythonapi=async()=>{
        const res=await callpythonnapi()
        console.log(res);
    }
  return (
    <div>Pythonapi</div>
  )
}

export default Pythonapi