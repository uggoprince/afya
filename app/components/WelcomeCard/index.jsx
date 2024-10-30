import React from 'react';
import './style.css';

const WelcomeCard = ({ username, date }) => {
    return (
      <div className="welcome-card bg-black">
        <h2 className="welcome-message">Welcome Back, {username}!</h2>
        <p className="welcome-date">{date}</p>
      </div>
    );
};

export default WelcomeCard;
