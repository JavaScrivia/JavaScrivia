import React, { useState } from 'react';
//import {Routes, Route, useNavigate} from 'react-router-dom';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';

const LandingPage = () => {
    //useState();
   // const navigate = useNavigate();

    //const navigateToLogin = () => { navigate(LoginPage) };
    //const navigateToSignup = () => { navigate(SignupPage) };

    // const LandingPage = 
    //     <div className="landingPage">
    //         <h1>Welcome to JavaScrivia</h1>
    //         <h2>Please sign up or log in to continue</h2>
    //         <div className="buttonsArea">
    //             <button className="loginButton">Log In</button>
    //             <button className="signupButton">Sign Up</button>
    //         </div>
    //     </div>
        return (
            <div className="landingPage">
            <h1>Welcome to JavaScrivia</h1>
            <h2>Please sign up or log in to continue</h2>
            <div className="buttonsArea">
                <button className="loginButton">Log In</button>
                <button className="signupButton">Sign Up</button>
            </div>
        </div>
        );
}

export default LandingPage;