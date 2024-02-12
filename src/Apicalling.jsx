import React, { useEffect, useState } from 'react'
import { getproducts } from './Services/allApi'

function Apicalling() {
    const[videoli,setvideoli]=useState([])
    // const[searchinput,setsearchinput]=useState()
    var searchinput='nature'
    const[searchinputs,setsearchinputs]=useState('')
    const[response,setrespone]=useState(1)
    const callapiproducts = async()=>{
         const res =await getproducts(searchinput)
         setvideoli(res.data.hits)
        // if(videoli){
        //   console.log(videoli.videos.small.url);
        // }
    }
    useEffect(()=>{
        callapiproducts()
        
    },[])
    // const handleplay=()=>{
    //     callapiproducts()
    // }
    const handlesearch=()=>{
        // alert(searchinputs)
        // setsearchinput(searchinputs)
        searchinput=searchinputs
        setrespone(response+1)
        if(videoli){
            setvideoli([])
        }
        // callapiproducts()
    }
    
  return (
    <div style={{display:'flex ',flexDirection:'column',width:'100%',height:'100%'}}>
        <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:'50px'}}><input value={searchinputs} onChange={e=>setsearchinputs(e.target.value)} type="text" placeholder='Search here...'  style={{display:'flex',justifyContent:'center',height:'30px',width:'550px',border:'2px solid grey',borderRadius:'10px',padding:'15px'}}/>
        <button onClick={handlesearch} style={{marginLeft:'10px',width:'50px',border:'2px solid grey',borderRadius:'10px',padding:'15px'}}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:'50px'}}>
            {videoli.map((item)=>(
                <video controls width="400" style={{marginTop:'50px'}}>
                <source src={item.videos.small.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
                 
               ))}
        </div>
        
      {/* <button onClick={handleplay}>Play</button> */}
      

    </div>
  )
}

export default Apicalling