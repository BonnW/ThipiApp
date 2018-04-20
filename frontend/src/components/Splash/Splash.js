import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';

import './Splash.css';
import Logo from '../../srcIMGs/Logo.png';


export default class Splash extends React.Component { 
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
          <div className="Header__Title">Sup' Bitches</div>
        </div>
        
      </div>
    )
  }


}
