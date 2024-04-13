import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  console.log(1)
  const [size,setSize]=useState(window.innerWidth)

  const handleWindow = () => {
    setSize(window.innerWidth)
  }
  
  useEffect(()=>{
    console.log('2')
    window.addEventListener('resize',handleWindow)

    return ()=>{
      console.log('Ok exiting')
      window.removeEventListener('resize',handleWindow)
    }
  },[])
  
  return <>
  <h2>Window</h2>
  <h3>{size}</h3>
  </>;
};

export default UseEffectCleanup;
