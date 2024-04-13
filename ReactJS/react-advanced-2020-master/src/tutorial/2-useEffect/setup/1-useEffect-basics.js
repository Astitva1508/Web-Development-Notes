import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [size,setSize]=useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize',()=>{
    console.log('Astitva')
    setSize(window.innerWidth)
  })
  },[])


  return <>
  <h1>{size}</h1></>
};

export default UseEffectBasics;
