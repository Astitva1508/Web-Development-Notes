import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError,setIsError] = useState(true)
  const handleClick=()=>{
    setIsError(!isError)
    console.log('Ok')
  }
  return <>
  <h1>John Doe</h1>
  <button onClick={handleClick}>Toggle Error</button>
  {isError?<h2>There is No Error</h2>:<>
  <h1>Error...</h1>
  <p>There is an error</p>
  </>}
  </>;
};

export default ShortCircuit;
