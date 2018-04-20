import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';

import './Splash.css';
import Logo from '../../srcIMGs/Logo.png';


export default class LoginForm extends React.Component { 
  constructor(props) {
    super();

      this.state = {

      }
  }

  render() {
    return (
      <div className="Login">
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
    )
  }
}

