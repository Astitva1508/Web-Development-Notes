import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} = useParams()
  const [name,setName] = useState('default Name')
  
  useEffect(()=>{
    const newName = data.find((d)=>{
    return d.id===parseInt(id)
  })
  setName(newName.name)
  },[])
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people'>Back to All</Link>
    </div>
  );
};

export default Person;
