import React from 'react';
import './MedTrackingPref.css';
import { useNavigate } from 'react-router-dom';

export default function MedTrackingPref() {


  const navigate = useNavigate();

  // Handles navigation based on user's selection
  const handleChoice = (choice) => {
    if (choice === 'yes') {
      navigate('/MedicalConditionSetup'); // Navigate to the medical condition setup route
    } else if (choice === 'no') {
      navigate('/regularPrefSetUp'); // Navigate to the regular preferences setup route
    }
  };

  return (
    <div className='MedTrackingPref container'>
      <div className='innerContainer'>
        <h1>specific medical condition tracking</h1>
        <p>Would you like us to help you track a specific condition?</p>
        <div className='buttonRow'>
          <button onClick={() => handleChoice('yes')}>Yes</button> 
          <button className='no' onClick={() => handleChoice('no')}>No</button>
        </div>
      </div>
    </div>
  );
}
