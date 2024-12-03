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
    <div className='SignUpS container'>
        <div className='innerContainer'>
            <h1>hello</h1>
            <div className='group'>
              <p>Please enter in your device <br/> serial number</p>
              <input type = "text" placeholder='12345678-123-123'  onKeyDown={handleKeyPress}></input>
            </div>

            <p>I don't have a device, where do I get one?</p>


        </div>

    </div>
  )
}
