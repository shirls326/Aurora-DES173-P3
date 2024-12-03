import React from 'react'
import './OnboardingPref.css'
import { useNavigate } from 'react-router-dom';

export default function OnboardingPref() {


  const navigate = useNavigate(); 

  const handleContinue = () => {
   
    navigate('/MedTrackingPref'); // Uses the route that is declared in the main.jsx file
  };
          

  return (

    
    <div className='Onboarding container'>
        <div className='innerContainer'>
            <h1>Welcome! NAME</h1>
            <p>You can customize your bracelet and portal based on your preferences!</p>
            <h2>Which areas would you like to track or improve?</h2>
            {/* form prompting for preferences */}
            <div className='checkboxFormContainer'>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="sleep" name="sleep" value="sleep"/>
                  <label for="sleep">Sleep</label>
                </div>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="activity" name="activity" value="activity"/>
                  <label for="activity">Activity Goals</label>
                </div>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="nutrition" name="nutrition" value="nutrition"/>
                  <label for="nutrition">Nutrition</label>
                </div>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="exercise" name="exercise" value="exercise"/>
                  <label for="exercise">Exercise</label>
                </div>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="stress" name="stress" value="stress"/>
                  <label for="stress">Stress</label>
                </div>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="medication" name="medication" value="medication"/>
                  <label for="medication">Medication</label>
                </div>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="social" name="social" value="social"/>
                  <label for="social">Social</label>
                </div>
                <div className='checkBoxDiv'>
                  <input type="checkbox" id="mental" name="mental" value="mental"/>
                  <label for="mental">Mental Health</label>
                </div>

            </div>
            <button onClick={handleContinue} >Continue</button>

        </div>
      

    </div>
  )
}
