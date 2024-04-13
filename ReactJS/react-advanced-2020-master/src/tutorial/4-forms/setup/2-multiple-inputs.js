import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [formInput,setFormInput] = useState({firstName:'',age:'',email:''});
  const [people,setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName,email,age} = formInput
    if (firstName && email && age) {
      const person = { id: new Date().getTime().toString(), firstName, email ,age};
      setPeople((people) => {
        return [...people, person];
      });
      setFormInput({firstName:'',age:'',email:''})
    } else {
      console.log('empty values');
    }
  };

  const handleInput=(e)=>{
    const {name,value} = e.target
    setFormInput({...formInput , [name]:value})
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formInput.firstName}
              onChange={handleInput}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formInput.email}
              onChange={handleInput}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input
              type='number'
              id='age'
              name='age'
              value={formInput.age}
              onChange={handleInput}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email ,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
