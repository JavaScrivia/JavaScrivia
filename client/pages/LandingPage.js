import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

const LandingPage = () => {

   const navigate = useNavigate();

    const navigateToLogin = () => { navigate('login') };
    const navigateToSignup = () => { navigate('signup') };

        return (
            <div className="landingPage">
            <h1>Welcome to JavaScrivia</h1>
            <h2>Please sign up or log in to continue</h2>
            <div className="buttonsArea">
                <button className="loginButton" onClick={navigateToLogin}>Log In</button>
                <button className="signupButton" onClick={navigateToSignup}>Sign Up</button>
            </div>
        </div>
        );
}

export default LandingPage;