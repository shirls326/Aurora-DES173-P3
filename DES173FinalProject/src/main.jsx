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
import MedTrackingCheck from './pages/medtrackcheck/MedTrackingPref';

// If user wants to track specific condition, these are specific routes for that
// import MedTrackingPref from './pages/medicalConditionSetup/MedTrackingPref/MedTrackingPref';
import MedTrackPrefSetup from './pages/medicalConditionSetup/medTrackPref/MedTrackPref';




// regular tracking (if user does not want to track specific condition)


// import Login from './pages/login/login';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/SignUpSerial" element={<SignUpSerial />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/OnboardingPref" element={<OnboardingPref />}/>
        <Route path="/MedTrackingCheck" element={<MedTrackingCheck />}/>
        <Route path="/MedicalConditionSetup" element={<MedTrackPrefSetup />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);