import React from 'react';
import './MedTrackingPref.css';
import { useNavigate } from 'react-router-dom';

export default function MedTrackingPref() {


  const navigate = useNavigate();

  // navigation based on user's selection
  const handleChoice = (choice) => {
    if (choice === 'yes') {
      navigate('/MedicalConditionSetup');
    } else if (choice === 'no') {
      navigate('/regularPrefSetUp');
    }
  };

  return (
    <div className='MedTrackingPref container'>
      <div className='innerContainer'>
        <h1 className='animate__animated animate__fadeInDown'>specific medical condition tracking</h1>
        <p className='animate__animated animate__fadeInDown'>Would you like us to help you track a specific condition?</p>
        <div className='buttonRow animate__animated animate__fadeInDown'>
          <button onClick={() => handleChoice('yes')}>Yes</button> 
          <button className='no' onClick={() => handleChoice('no')}>No</button>
        </div>
      </div>
    </div>
  );
}
