import {React, useContext} from 'react'
import { Names } from './Context';  
import {NavLink} from 'react-router-dom'


const Home = () => {

  const {names, setNames} = useContext(Names);

  function handleChange(event) {
    const { name, value } = event.target;

    setNames((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(names.firstPlayer);
    console.log(names.secondPlayer);

  
  }



  return (
    <div className='my-10 flex flex-col items-center'>
      <div className='my-10 flex flex-col'>
          <label className='ml-10 py-1 items-start justify-start text-xs text-white text-left'>Player X</label>
          <input 
          type='text' 
          name='firstPlayer'
          value={names.firstPlayer}
          onChange={handleChange}
          className='border 2px solid border-black mx-10 rounded-md w-[250px] h-[35px]'></input>
      </div>
      <div className='mb-10 flex flex-col'>
          <label className='ml-10 py-1 items-start justify-start text-xs text-white text-left'>Player O</label>
          <input 
          type='text' 
          name='secondPlayer'
          value={names.secondPlayer}
          onChange={handleChange} 
          className='border 2px solid border-black mx-10 rounded-md w-[250px] h-[35px]'></input>
      </div>
        {names.firstPlayer.value || names.secondPlayer === "" ? <button className="bg-[#a4a5a5] py-1 px-12 w-[250px] text-2xl border rounded-md text-white">Play</button> :
        <NavLink to= '/Game'><button className="bg-[#0074a6] py-1 px-12 text-2xl w-[250px] border rounded-md text-white">Play</button></NavLink>}
        
    </div>
  )
}

export default Home