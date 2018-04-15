import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
<<<<<<< HEAD
import './components/Navbar/Navbar.css';
=======
import Splash from './components/Splash/Splash';
>>>>>>> 3d3205b1f94b03fe6518edb2668712c0a8d7cfcc

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Splash />
      </div>
    );
  }
}

export default App;
