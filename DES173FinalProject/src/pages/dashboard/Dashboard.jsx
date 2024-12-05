import React from 'react';
import logo from '../../assets/logo.svg';
import med from '../../assets/med.svg';
import activity from '../../assets/activity.svg';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='container dashboard'>
      <div className="navbar">
        <a href="/dashboard"><img src={logo} /></a>
        <div className="right">
          <a href="/medtrack"><h2>MedTrack</h2></a>
          <a href="/profile"><h2>Profile</h2></a>
          <a href="/settings"><h2>Settings</h2></a>
        </div>
      </div>
      <h1>Good Morning, Shirley 👋</h1>
      <div className="content">
        <div className="left">
          <div className="medications">
            <h1>Medications</h1>
            <img src={med} />
            <img src={med} />
          </div>
        </div>
        <div className="right">
          <div className="activityGoal">
            <h1>Activity Goal</h1>
            <p>5,034 / 10,000 steps</p>
            <img src={activity} />
          </div>
          <div className="addModule">
            <h1>Want to add more?</h1>
            <p>Click <u>here</u> to add more information!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;