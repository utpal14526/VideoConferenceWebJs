import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Home() {

  
const [roomCode,setRoomCode]=useState();

const handleChange=(e)=>{
    setRoomCode(e.target.value);
    
}

const navigate=useNavigate();

const handleFormSubmit=(e)=>{
    e.preventDefault();
    navigate(`/room/${roomCode}`);
}

  return (
    <div class='home-page'>
        <form className="form" onSubmit={handleFormSubmit}>
            <label>Enter Room Code</label>
            <input type="text" value={roomCode} onChange={handleChange} placeholder='Enter Your Room Code' />
            <button type='submit'>Enter Room</button>
        </form>
    </div>
  )
}
