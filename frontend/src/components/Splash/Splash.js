import React, { Component } from 'react';


import './Splash.css';
import Logo from '../../srcIMGs/Logo.png';


export default class Splash extends Component { 
  constructor(props) {
    super();

      this.state = {

      }
  }

  render() {
    return (
      <div className="Root--Component">
        <div className="Header"> 
          <div className="Header__Logo">
            <img className="ThipiLogo" src={Logo} alt="ThipiLogo" />
          </div>
          <div className="Header__Title">Thipi Thai</div>
        </div>
        
      </div>
    )
  }


}
