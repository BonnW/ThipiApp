import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Splash from './components/Splash/Splash';
import LoginForm from './components/LoginForm/LoginForm';
import AltLogin from './components/AltLogin/AltLogin.js';

import './components/Navbar/Navbar.css';



/******** Testing Some shit ********/

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}!
    </div>
  )
}

const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(`You fucked up`) // DON'T KEEP THIS -- REMOVE BEFORE MERGE
    }
  }
}

SayHello.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}

/******* Testing Some shit END ********/



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SayHello firstName={true} lastName={false} />, */}
        <Splash />
        <LoginForm />
        <AltLogin />
        {/* <Navbar /> */}

      </div>
    );
  }
}

export default App;
