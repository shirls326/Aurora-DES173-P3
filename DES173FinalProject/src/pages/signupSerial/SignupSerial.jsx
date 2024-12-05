import React, { useState } from 'react';
import './SignupSerial.css'; 
import { useNavigate } from 'react-router-dom';

export default function SignupSerial() {
  const navigate = useNavigate();

  // Hardcoded list of valid serial numbers
  const validSerialNumbers = [
    '12345678-123-123',
    '87654321-456-789',
    '11223344-111-222',
    '22334455-333-444',
  ];

  const [inputValue, setInputValue] = useState(''); // Track user input
  const [error, setError] = useState(false); // Track error state

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (validSerialNumbers.includes(inputValue.trim())) {
        setError(false); // Clear error
        navigate('/SignUp'); // Navigate to the next step if valid
      } else {
        setError(true); // Set error state
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value
    setError(false); // Clear error as the user types
  };

  return (
    <div className="SignUpS container">
      <div className="innerContainer">
        <h1>Hello</h1>
        <div className="group">
          <p>
            Please enter your device <br /> serial number
          </p>
          <input
            type="text"
            placeholder="12345678-123-123"
            value={inputValue}
            onChange={handleInputChange} // Update state as the user types
            onKeyDown={handleKeyPress} // Check serial number on Enter
            className={error ? 'inputError' : ''} // Add error styling if invalid
          />
        </div>
        {error && <p className="error">Invalid serial number. Please try again.</p>}
        <p>I don't have a device, where do I get one?</p>
      </div>
    </div>
  );
}
