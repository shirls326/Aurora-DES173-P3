import React from 'react'
import './Signup.css'

export default function Signup() {
  return (
    <div className='SignUp container'>
      <div className='innerContainer'>  
          <h1>Sign Up</h1>
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
            <button>Continue</button>
        
        </div>

    </div>
  )
}
