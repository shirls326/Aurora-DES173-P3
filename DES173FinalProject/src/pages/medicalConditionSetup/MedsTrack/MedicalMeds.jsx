import React, { useState } from 'react';
import './MedicalMeds.css'; // Add CSS for styling
import { useNavigate } from 'react-router-dom';

export default function MedicalMedsTrack() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // Track the current step in the process
  const [medications, setMedications] = useState([]);
  const [medicationInput, setMedicationInput] = useState(''); // Track the input for medication
  const [customizationMode, setCustomizationMode] = useState(null); // Track which medication is being customized
  const [medicationTimes, setMedicationTimes] = useState({}); // Track times for each medication
  const [notes, setNotes] = useState(''); // Track additional notes

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
    setMedicationTimes((prev) => {
      const updatedTimes = { ...prev };
      delete updatedTimes[medicationToRemove];
      return updatedTimes;
    });
  };

  const handleCustomize = (medication) => {
    setCustomizationMode(medication); // Enter customization mode for the selected medication
  };

  const handleTimeChange = (medication, time) => {
    setMedicationTimes((prev) => ({
      ...prev,
      [medication]: time,
    }));
  };

  const handleSaveCustomization = () => {
    setCustomizationMode(null); // Exit customization mode
  };

  const handleContinue = () => {
    setStep(step + 1); // Move to the next step
  };

  const handleSubmit = () => {
    console.log({
      medications,
      medicationTimes,
      notes,
    });
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
            <ul className='case0'>
              {medications.map((med, index) => (
                <li key={index}>
                  <span
                    className="medicationText clickable"
                    onClick={() => handleCustomize(med)}
                  >
                    {med}
                  </span>
                  <button
                    className="removeButton"
                    onClick={() => handleRemoveMedication(med)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={handleContinue}>Continue</button>
          </>
        );
      case 1:
        if (customizationMode) {
          // Render customization UI for the selected medication
          return (
            <div className='TimeSetUp'>
              <p>Customize your schedule for {customizationMode}</p>
              <label>
            
                <input
                  type="time"
                  value={medicationTimes[customizationMode] || ''}
                  onChange={(e) =>
                    handleTimeChange(customizationMode, e.target.value)
                  }
                />
              </label>
              <button onClick={handleSaveCustomization}>Save</button>
            </div>
          );
        } else {
          // Render the general "customize later" view
          return (
            <>
              <p>You can customize each medication by clicking on it, or continue to customize later.</p>
              <ul className='case1'>
                {medications.map((med, index) => (
                  <li key={index} className="medicationItem">

                    <div className='left'> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="M10.5 17.5h3V15H16v-3h-2.5V9.5h-3V12H8v3h2.5zM7 21q-.825 0-1.412-.587T5 19V8q0-.825.588-1.412T7 6h10q.825 0 1.413.588T19 8v11q0 .825-.587 1.413T17 21zM6 5V3h12v2z"/></svg>
                      <div className="medicationDetails" onClick={() => handleCustomize(med)}>
                        
                        <span className="medicationName">
                          {med}
                        </span>
                        <span className="medicationTime">
                          {medicationTimes[med] ? `Time: ${medicationTimes[med]}` : "No time set"}
                        </span>
                      </div>

                    </div>
                    <div className='right'>
                      <button
                        className="removeButton"
                        onClick={() => handleRemoveMedication(med)}
                      >
                        X
                      </button>

                    </div>
                  
                  </li>
                ))}
              </ul>

              <button onClick={handleContinue}>Continue</button>
            </>
          );
        }
      case 2:
        return (
          <div>
            <p>How would you prefer to receive your reminders?</p>
            <label>
              <input
                type="radio"
                name="reminderMethod"
                value="Phone"
                onChange={(e) => console.log(e.target.value)}
              />
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="reminderMethod"
                value="Email"
                onChange={(e) => console.log(e.target.value)}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="reminderMethod"
                value="App"
                onChange={(e) => console.log(e.target.value)}
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
        <h1>medical medication tracking</h1>
        {renderStep()}
      </div>
    </div>
  );
}
