import React from 'react';
import './MedTrackPref.css';
import { useNavigate } from 'react-router-dom';

export default function MedTrackPref() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState([]);


  const handleContinue = () => {
    navigate('/MedTrackingCheck'); // Uses the route declared in the main.jsx file
  };

  return (
    <div className='medTrackPref container'>
      <div className='innerContainer'>
        <h1>Symptom Tracking and Monitoring</h1>
        <p>What would you like specific assistance monitoring?</p>
        <div className='checkboxFormContainer'>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="symptom" name="symptom" value="symptom" />
            <label htmlFor="symptom">Symptom Tracking and Flare-up Logging</label>
          </div>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="medication" name="medication" value="medication" />
            <label htmlFor="medication">Medication Reminders and Tracking</label>
          </div>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="healthMetrics" name="healthMetrics" value="healthMetrics" />
            <label htmlFor="healthMetrics">Health Metrics Monitoring (e.g., heart rate, blood pressure)</label>
          </div>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="mood" name="mood" value="mood" />
            <label htmlFor="mood">Mood and Mental Health Tracking</label>
          </div>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="activityRecommendations" name="activityRecommendations" value="activityRecommendations" />
            <label htmlFor="activityRecommendations">Activity Recommendations Based on Health</label>
          </div>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="dietary" name="dietary" value="dietary" />
            <label htmlFor="dietary">Dietary or Hydration Reminders</label>
          </div>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="emergency" name="emergency" value="emergency" />
            <label htmlFor="emergency">Emergency Contacts and Alerts</label>
          </div>
          <div className='checkBoxDiv'>
            <input type="checkbox" id="emergency" name="emergency" value="emergency" />
            <label htmlFor="emergency">Emergency Contacts and Alerts</label>
          </div>
        </div>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
}
