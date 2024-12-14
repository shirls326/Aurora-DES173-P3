import React from 'react'
import './ActivityGoals.css'
import { useNavigate } from 'react-router-dom';

export default function ActivityGoals() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(e.target.innerText);
    navigate('/Dashboard');
  }

  return (
    <div className='container activityGoals'>
      <div className="innerContainer">
        <h1 className='animate__animated animate__fadeInDown'>Activity Goals</h1>
        <p className='animate__animated animate__fadeInDown'>What would you like to set your daily goal to?</p>
        <div className='selectionGrid animate__animated animate__fadeInDown'>
          <button onClick={handleSubmit}>10000 Steps</button>
          <button onClick={handleSubmit} style={{ backgroundColor: 'orange' }}>15000 Steps</button>
          <button onClick={handleSubmit} style={{ backgroundColor: 'red' }}>20000 Steps</button>
          <button onClick={handleSubmit}>3 Miles</button>
          <button onClick={handleSubmit} style={{ backgroundColor: 'orange' }}>6 Miles</button>
          <button onClick={handleSubmit} style={{ backgroundColor: 'red' }}>9 Miles</button>
          <button onClick={handleSubmit}>2000 Calories</button>
          <button onClick={handleSubmit} style={{ backgroundColor: 'orange' }}>2500 Calories</button>
          <button onClick={handleSubmit} style={{ backgroundColor: 'red' }}>3000 Calories</button>
        </div>
      </div>
    </div>
  )
}
