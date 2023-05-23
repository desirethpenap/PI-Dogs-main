import React from "react";
import {NavLink} from 'react-router-dom';
import "../LandingPage/LandingPage.css";

function LandingPage() {
    return (
      <div className="landingcontainer">
        
        <div className="dogs1">
          <h1 className="titulo">Pi dogs</h1>
          
            <NavLink to="/home" className="btn">
              <span>Start</span>
            </NavLink>
        </div>
      </div>
    )
  }
  
  export default LandingPage 