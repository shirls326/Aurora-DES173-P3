import React, { useState } from 'react';
import './MedTrackPref.css';
import { useNavigate } from 'react-router-dom';

export default function MedTrackPref() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState([]);

  const routes = {
    symptom: '/MedicalConditionSetup/SymptomTrack',
    medication: '/MedicalConditionSetup/MedsTrack',
    healthMetrics: '/MedicalConditionSetup/HealthMetrics', 
    mood: '/MedicalConditionSetup/MedMentalHealth',
    activityRecommendations: '/MedicalConditionSetup/ActivityRecommendations', 
    dietary: '/MedicalConditionSetup/DietaryReminders', 
    emergency: '/MedicalConditionSetup/EmergencySetup', 
  };

  // update the preferences list based on the checkboxes
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setPreferences((prev) => [...prev, value]);
    } else {
      setPreferences((prev) => prev.filter((pref) => pref !== value));
    }
  };

  // go to the next preference in the list
  const handleContinue = () => {
    if (preferences.length > 0) {
      navigateSequentially(preferences);
    }
  };

  // navigate to the next preference in the list
  const navigateSequentially = (selectedPreferences, index = 0) => {
    if (index < selectedPreferences.length) {
      const nextRoute = routes[selectedPreferences[index]];
      navigate(nextRoute, {
        state: { nextIndex: index + 1, preferences: selectedPreferences },
      });
    } else {
      navigate('/MedTrackingCheck'); // default route
    }
  };

  return (
    <div className='medTrackPref container'>
      <div className='innerContainer'>
        <h1>specific medical condition tracking</h1>
        <p>What would you like specific assistance monitoring?</p>
        <div className='checkboxFormContainer'>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="symptom"
              value="symptom"
              onChange={handleCheckboxChange}
                  className='checkbox'
            />
            <label htmlFor="symptom">Symptom Tracking and Flare-up Logging</label>
          </div>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="medication"
              value="medication"
              onChange={handleCheckboxChange}
                  className='checkbox'
            />
            <label htmlFor="medication">Medication Reminders and Tracking</label>
          </div>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="healthMetrics"
              value="healthMetrics"
              onChange={handleCheckboxChange}
                  className='checkbox'
            />
            <label htmlFor="healthMetrics">
              Health Metrics Monitoring (e.g., heart rate, blood pressure)
            </label>
          </div>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="mood"
              value="mood"
              onChange={handleCheckboxChange}
                  className='checkbox'
            />
            <label htmlFor="mood">Mood and Mental Health Tracking</label>
          </div>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="activityRecommendations"
              value="activityRecommendations"
              onChange={handleCheckboxChange}
                  className='checkbox'
            />
            <label htmlFor="activityRecommendations">
              Activity Recommendations Based on Health
            </label>
          </div>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="dietary"
              value="dietary"
              onChange={handleCheckboxChange}
                  className='checkbox'
            />
            <label htmlFor="dietary">Dietary or Hydration Reminders</label>
          </div>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="emergency"
              value="emergency"
              onChange={handleCheckboxChange}
              className='checkbox'
            />
            <label htmlFor="emergency">Emergency Contacts and Alerts</label>
          </div>
          <div className='checkBoxDiv'>
            <input
              type="checkbox"
              id="emergency"
              value="emergency"
              onChange={handleCheckboxChange}
              className='checkbox'
            />
            <label htmlFor="emergency">Emergency Contacts and Alerts</label>
          </div>
        </div>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
}
