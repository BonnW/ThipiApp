import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';
import Logo from '../../srcIMGs/Logo.png';


import './LoginForm.css';



export default class LoginForm extends Component { 
  constructor(props) {
    super();

      this.state = {

      }
  }

  render() {
    return (
      <div className="Login">
        <img className="ThipiLogo" src={Logo} alt="ThipiLogo" />
        <Form>
          <FormGroup>
            <Label for="exampleEmail"></Label>
            <Input type="email" className="UserEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePass"></Label>
            <Input type="password" className="UserPassword" placeholder="Password" />
          </FormGroup>
        </Form>
        
        <button className="SignInButton">-Sign In-</button>
      </div>
    )
  }
}

