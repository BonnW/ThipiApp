import React, { Component } from 'react';


import './AltLogin.css';
import fbLogin from '../../srcIMGs/fbBar.png';
import googleLogin from '../../srcIMGs/googleBar.png';


export default class AltLogin extends React.Component {
    constructor(props) {
        super();

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div className="or">
                    ----Or----
                    <img onClick={console.log("you clicked me")}className="fbLogin" src={fbLogin} alt="Facebook Login" />
                    <img className="googleLogin" src={googleLogin} alt="Google Login" />
                </div>
            </div>
        )
    }
}