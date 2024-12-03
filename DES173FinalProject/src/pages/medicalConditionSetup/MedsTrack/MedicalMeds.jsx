import React, { useState } from 'react';
import './MedicalMeds.css'; // Add CSS for styling
import { useNavigate } from 'react-router-dom';

export default function MedicalMedsTrack() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // Track the current step in the process
  const [medications, setMedications] = useState([]);
  const [medicationInput, setMedicationInput] = useState(''); // Track the input for medication

  const handleMedicationInputChange = (event) => {
    setMedicationInput(event.target.value);
  };

  const handleAddMedication = (event) => {
    if (event.key === 'Enter' && medicationInput.trim() !== '') {
      setMedications((prev) => [...prev, medicationInput.trim()]);
      setMedicationInput(''); // Clear the input after adding
    }
  };

  const handleRemoveMedication = (medicationToRemove) => {
    setMedications((prev) =>
      prev.filter((med) => med !== medicationToRemove)
    );
  };

  const handleContinue = () => {
    setStep(step + 1); // Move to the next step after clicking "Continue"
  };

  const handleSubmit = () => {
    // Once all preferences are collected, navigate to the next page
    navigate('/NextStep');
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <p>Which medications would you like to track?</p>
            <input
              type="text"
              placeholder="Enter medication name and press Enter"
              value={medicationInput}
              onChange={handleMedicationInputChange}
              onKeyDown={handleAddMedication} // Handle Enter key press
            />
            <ul>
              {medications.map((med, index) => (
                <li key={index}>
                  {med}
                  <button onClick={() => handleRemoveMedication(med)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={handleContinue}>Continue</button>
          </>
        );
      case 1:
        return (
          <div>
            <p>When would you like to receive reminders for your medications?</p>
            <label>
              <input
                type="checkbox"
                value="Morning"
                onChange={(event) => handleReminderTimesChange(event)}
              />
              Morning
            </label>
            <label>
              <input
                type="checkbox"
                value="Afternoon"
                onChange={(event) => handleReminderTimesChange(event)}
              />
              Afternoon
            </label>
            <label>
              <input
                type="checkbox"
                value="Evening"
                onChange={(event) => handleReminderTimesChange(event)}
              />
              Evening
            </label>
            <button onClick={handleContinue}>Continue</button>
          </div>
        );
      case 2:
        return (
          <div>
            <p>How would you prefer to receive your reminders?</p>
            <label>
              <input
                type="radio"
                name="reminderMethod"
                value="Phone"
                onChange={handleReminderMethodChange}
              />
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="reminderMethod"
                value="Email"
                onChange={handleReminderMethodChange}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="reminderMethod"
                value="App"
                onChange={handleReminderMethodChange}
              />
              App (via notifications)
            </label>
            <button onClick={handleContinue}>Continue</button>
          </div>
        );
      case 3:
        return (
          <div>
            <p>Do you have any additional notes or preferences?</p>
            <textarea
              placeholder="Add any additional details you'd like us to know"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="MedicalMeds container">
      <div className="innerContainer">
        <h1>Medical Medication Tracking</h1>
        {renderStep()}
      </div>
    </div>
  );
}
