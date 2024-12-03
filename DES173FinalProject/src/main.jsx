// react
import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// css
import './index.css';


// pages
import Landing from './pages/landing/Landing';
import SignUpSerial from './pages/signupSerial/SignupSerial';
import SignUp from './pages/signup/Signup';
import OnboardingPref from './pages/onboardingPref/OnboardingPref';
import MedTrackingPref from './pages/medtrackpref/MedTrackingPref';
// import Login from './pages/login/login';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/SignUpSerial" element={<SignUpSerial />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/OnboardingPref" element={<OnboardingPref />}/>
        <Route path="/MedTrackingPref" element={<MedTrackingPref />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);