import React from 'react'
import jayjaysLogo from '../assets/images/jayjays.png';
import '../assets/css/Jayjays.css';

const Jayjays = () => {
    return (
      <div className="logo-container">
        <img src={jayjaysLogo} alt="Logo" className="logo" />
        <div className="logo-text">
          <span>&</span>
          <br />
          <span>MOVIES</span>
        </div>
      </div>
    );
  };
  

export default Jayjays