import React, { useEffect, useReducer} from 'react';

const reducerFunction=(state,action)=>{
  switch (action.type){
    case 'EMPTY INPUT':
  }
}

const UseRefBasics = () => {
  const [atate,dispatch] = useReducer(reducerFunction,'Astitva')
  return <>
    <form className='form'>
      <input type="text" />
      <button  >0</button>
    </form>
  </>
};

export default UseRefBasics;
