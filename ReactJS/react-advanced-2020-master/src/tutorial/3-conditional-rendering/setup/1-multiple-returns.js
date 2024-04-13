import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false)
  const [user,setUser] = useState('default user')

  const getData=async()=>{
    try {
      const data =await fetch(url);
      const info = await data.json()
      return info.name;
    } catch (error) {
      return false
    }
    
  }

  useEffect(()=>{
    if (getData()){
      setIsLoading(false)
      setIsError(false)
      setUser(getData())
    }
    else{
      setIsLoading(false)
      setIsError(true)
    }
  },[])
  return <>{isLoading && <h2>Loading...</h2> }
  {<h2>{isError?getData():'Error...'}</h2>}</> 
  
};

export default MultipleReturns;
