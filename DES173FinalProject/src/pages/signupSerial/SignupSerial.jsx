import React from 'react'
import './SignupSerial.css'
import { useNavigate } from 'react-router-dom'; 


export default function SignupSerial() {

    const navigate = useNavigate(); 

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
 
        navigate('/SignUp'); 
      }
    };


  return (
    <div className='SignUp container'>
        <div className='innerContainer'>
            <h1>Hello</h1>
            <p>Please enter in your device <br/> serial number</p>
            <input type = "text" placeholder='12345678-123-123'  onKeyDown={handleKeyPress}></input>

            <p>I don't have a device, where do I get one?</p>


        </div>

    </div>
  )
}
