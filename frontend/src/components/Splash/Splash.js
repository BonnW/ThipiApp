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
          <div className="ThipiLogo--Container">
            <img className="ThipiLogo--image" src={Logo} alt="ThipiLogo" />
          </div>
          <div className="Header--Title">Thipi Thai</div>
          <div className="Header--subTitle">Restaurant & Bar</div>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePass">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" />
            </FormGroup>
          </Form>
          <button className="GuestButton">Continue as Guest</button>
        </div>
      </div>
    )
  }


}
