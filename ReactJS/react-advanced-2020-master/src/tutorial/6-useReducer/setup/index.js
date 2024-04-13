import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer =(state,action)=>{
  switch (action.type) {
    case 'EMPTY INPUT':
      return {...state,isModalOpen:true,modalContent:'Namaste India'};
    default:
      break;
  }
}

const defaultState={
  isModalOpen:false,
  people:[],
  modalContent:''
}

const Index = () => {
  const [name,setName] = useState('')
  const [state,dispatch] = useReducer(reducer , defaultState)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (!name){
      dispatch({type:'EMPTY INPUT'})
    }
  }

  const remove=()=>{}
  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className='form'>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button type="submit">Go</button>
    </form>
    {state.people.map((d)=>{
      return <>
        <p>{d}</p>
        <button onClick={remove}>remove</button>
      </>
    })}
  </>;
};

export default Index;
