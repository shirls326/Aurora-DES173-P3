import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate(); 

  const handleContinue = () => {
   
    navigate('/OnboardingPref');
  };

  return (
    <div className='SignUp container'>
      <div className='innerContainer'>  
          <h1>sign up</h1>
          <p>Enter your details below to create your <br/> account and get started</p>
            <div className='SignUpInfo'>
              <div className='col'>
                <div className='InputContainer'>
                    <p>Full Name</p>
                    <input type = "text" placeholder='John Doe'></input>
                </div>
                <div className='InputContainer'>
                    <p>Phone Number</p>
                    <input type = "text" placeholder='123-456-7890'></input>
                </div>
                <div className='InputContainer'>
                    <p>Birthday</p>
                    <input type = "text" placeholder='01/01/1999'></input>
                </div>
            

              </div>
              <div className='col'>
                <div className='InputContainer'>
                    <p>Email</p>
                    <input type = "text" placeholder='johndoe@example.com'></input>
                </div>
                <div className='InputContainer'>
                    <p>Address</p>
                    <input type = "text" placeholder='123 Example Street'></input>
                </div>
                <div className='InputContainer'>
                    <p>Password</p>
                    <input type = "password" placeholder=''></input>
                </div>


              </div>
                
            </div>
            <button onClick={handleContinue} >Continue</button>
        
        </div>

    </div>
  )
}
