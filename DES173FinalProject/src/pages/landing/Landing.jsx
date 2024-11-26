import React from 'react'
import './Landing.css'

export default function Landing() {
  return (
    <div className='container landing'>
        <div className='left'>

        </div>
        <div className='right'>
            <h1>Welcome!</h1>
            <h3>Please enter your details</h3>

            <div className='loginInputs'>

                <input type = "text" placeholder='Enter your email'></input>
                <input type = "text" placeholder='password'></input>
            </div>

            <div>
                <input type="checkbox" name="myCheckbox" />  Remember me

            </div>

            <button class = 'loginButton'>Log in</button>

            <p>Don't have an account? <a href = "/SignUpSerial">Create an account</a></p>


        </div>

    </div>
    
  )
}
