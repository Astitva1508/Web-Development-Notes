import React from 'react';
import { useState } from 'react';

const ErrorExample = () => {
  const [title,setTitle]=useState('Random Title');
  const handleClick=()=>{
    setTitle((prev)=>{
      return 
    })
  }
  return <React.Fragment>
    <h1>{title}</h1>
    <button type='submit' onClick={handleClick}>THis is a buttomn</button>
  </React.Fragment>;
};

export default ErrorExample;
