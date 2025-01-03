import React from 'react'
import './Landing.css'
import AURORALogo from '../../assets/logo.svg'

export default function Landing() {
  return (
    <div className='container landing'>
        <div className='left'>
          <img className= 'animate__animated animate__fadeInDown'src={AURORALogo} alt='AURORA logo' />
        </div>
        <div className='right'>
            <h1>welcome!</h1>
            <h2>Please enter your details</h2>


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
