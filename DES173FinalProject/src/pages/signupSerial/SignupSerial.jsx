import React, { useState } from 'react';
import './SignupSerial.css'; 
import { useNavigate } from 'react-router-dom';

export default function SignupSerial() {
  const navigate = useNavigate();

  // hardcoded list
  const validSerialNumbers = [
    '12345678-123-123',
    '87654321-456-789',
    '11223344-111-222',
    '22334455-333-444',
  ];

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (validSerialNumbers.includes(inputValue.trim())) {
        setError(false);
        navigate('/SignUp'); // only goto the next step if valid
      } else {
        setError(true); // set error
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError(false);
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
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className={error ? 'inputError' : ''} // error styling if invalid
          />
        </div>
        {error && <p className="error">Invalid serial number. Please try again.</p>}
        <p>I don't have a device, where do I get one?</p>
      </div>
    </div>
  );
}
