import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)

  const eventHandler=(e)=>{
    console.log(e.target.innerHTML)
    const {innerHTML:buttonText}=e.target 
    if(buttonText==='Decrease') setValue(value-1)
    else if(buttonText==='Reset'){setValue(0)}
    else if(buttonText==='Increase') setValue(value+1)
    else if (buttonText==='Increase Later') {
      setTimeout(()=>{
        setValue((prev)=>prev+1)
      },2000)}

//Understand the difference between this code and the code written above.If we click on the counter quickly a number of times , then the below code increases by only one
      // setTimeout(()=>{
      //   setValue(value+1)
      // },2000)}
//Reason being that useState state setting function (i.e setValue) is asynchronous
//Never return undefined inside the setValue function.Otherwise your whole functionality might break
  }
  return <>
    <Counter title='Regular Counter' value={value}/>
    <Button text = 'Decrease' handleButton={eventHandler} />
    <Button text = 'Reset' handleButton={eventHandler} />
    <Button text = 'Increase' handleButton={eventHandler} />
    <Counter title='More Complex Counter' value={value}/>
    <Button text = 'Increase Later' handleButton={eventHandler} />
  </>
};

const Counter=({value,title})=>{
  return <>
    <h2>{title}</h2>
    <h1>{value}</h1>
  </>
}

const Button=({text,handleButton})=>{
  return <button className='btn' onClick={handleButton}>{text}</button>
}
export default UseStateCounter;
