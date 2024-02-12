import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

function Imagegenerator() {
  const textRef = useRef(null);
var dataURL
const[dtat,setdtat]=useState()
const[userinp,setuserinp]=useState()
  const handleGenerateImage = () => {
    html2canvas(textRef.current).then((canvas) => {
       dataURL = canvas.toDataURL();
      console.log(dataURL);
      setdtat(dataURL) // You can set this dataURL as an image src or do something else with it
    });
  };

  return (
    <div>
      <div className='backg'
        ref={textRef}
        style={{
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
          width: '200px',
          height: '200px',
          border: '1px solid black',
          padding: '20px',
          textAlign: 'center',
          backgroundColor:'black',
          borderRadius:'10%'
          
        }}
      >
        <h2 style={{color:'white',fontWeight:'bolder',fontFamily:'Protest Revolution',width:'150px',height:'150px',borderRadius:'50%',backgroundColor:'', justifyContent:'center',textAlign: 'center', alignItems:'center',display:'flex',border:'2px solid white',textShadow:'2px 2px 5px blue',fontSize:'35px'}}>{userinp}</h2>
      </div>
      <input type="text" placeholder='Enter Content' onChange={e=>setuserinp(e.target.value)} value={userinp}/>
      <button onClick={handleGenerateImage}>Generate Image</button>
      <img src={dtat} alt="no" />
    </div>
  );
}

export default Imagegenerator;
