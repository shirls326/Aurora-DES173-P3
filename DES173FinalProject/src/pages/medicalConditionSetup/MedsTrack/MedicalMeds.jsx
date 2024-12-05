import React, { useState } from 'react';
import './MedicalMeds.css'; // Add CSS for styling
import { useNavigate } from 'react-router-dom';

export default function MedicalMedsTrack() {


  const navigate = useNavigate();
  // using states to keep track of step and medication
  const [step, setStep] = useState(0);
  const [medications, setMedications] = useState([]);
  const [medicationInput, setMedicationInput] = useState('');
  const [customizationMode, setCustomizationMode] = useState(null);
  const [medicationTimes, setMedicationTimes] = useState({});
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');


  const handleMedicationInputChange = (event) => {
    setMedicationInput(event.target.value);
    if (error && event.target.value.trim() !== '') {
      setError(''); // Clear the error when the user types something valid
    }
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
    if (step === 0 && medications.length === 0) {
      setError('You need to type in at least one medication.');
      return; // Stop the user from continuing
    }
    setError(''); // Clear the error if everything is valid
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
              className={error ? 'errorInput' : ''}
            />
            {error && <p className="errorMessage">{error}</p>}
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
                  <li key={index} className="medicationItem" onClick={() => handleCustomize(med)}>

                    <div className='left'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="M10.5 17.5h3V15H16v-3h-2.5V9.5h-3V12H8v3h2.5zM7 21q-.825 0-1.412-.587T5 19V8q0-.825.588-1.412T7 6h10q.825 0 1.413.588T19 8v11q0 .825-.587 1.413T17 21zM6 5V3h12v2z" /></svg>
                      <div className="medicationDetails" >

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
          <div className='case2'>
            <p>How would you prefer to receive your reminders?</p>
            <div className='checkboxcase2divs'>
              <div className='checkBoxDiv'>
                <input
                  className='checkbox'
                  type="checkbox"
                  name="reminderMethod"
                  value="Phone"
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="Phone">Phone</label>
              </div>
              <div className='checkBoxDiv'>
                <input
                  className='checkbox'
                  type="checkbox"
                  name="reminderMethod"
                  value="Email"
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="Email">Email</label>
              </div>
              <div className='checkBoxDiv'>
                <input
                  className='checkbox'
                  type="checkbox"
                  name="reminderMethod"
                  value="App"
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="App">App (via notifications)</label>
              </div>


            </div>

            <button onClick={handleContinue}>Continue</button>
          </div>
        );
      case 3:
        return (
          <div className='case3'>
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
