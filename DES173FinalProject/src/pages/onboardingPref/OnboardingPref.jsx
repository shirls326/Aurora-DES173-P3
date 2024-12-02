import React from 'react'
import './OnboardingPref.css'

export default function OnboardingPref() {
  return (
    <div className='Onboarding container'>
        <div className='innerContainer'>
            <h1>Welcome! NAME</h1>
            <p>You can customize your bracelet and portal based on your preferences!</p>
            <h2>Which areas would you like to track or improve?</h2>
            {/* form prompting for preferences */}
            <div className='checkboxFormContainer'>

                
                <input type="checkbox" id="sleep" name="sleep" value="sleep"/>
                <label for="sleep">Sleep</label>
                <input type="checkbox" id="exercise" name="exercise" value="exercise"/>
                <label for="exercise">Exercise</label>
                <input type="checkbox" id="nutrition" name="nutrition" value="nutrition"/>
                <label for="nutrition">Nutrition</label>
                <input type="checkbox" id="hydration" name="hydration" value="hydration"/>
                <label for="hydration">Hydration</label>
                <input type="checkbox" id="stress" name="stress" value="stress"/>
                <label for="stress">Stress</label>
                <input type="checkbox" id="meditation" name="meditation" value="meditation"/>
                <label for="meditation">Meditation</label>
                <input type="checkbox" id="social" name="social" value="social"/>
                <label for="social">Social</label>
                <input type="checkbox" id="mental" name="mental" value="mental"/>
                <label for="mental">Mental Health</label>

            </div>

        </div>
      

    </div>
  )
}
