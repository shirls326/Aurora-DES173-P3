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
// import Login from './pages/login/login';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/SignUpSerial" element={<SignUpSerial />}/>
        <Route path="/SignUp" element={<SignUp />}/>



   
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);