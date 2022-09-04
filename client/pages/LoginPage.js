import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import TriviaPage from './TriviaPage';

export default function LoginPage () {
    
    const navigate = useNavigate();
    
    const navigateToTrivia = () => { navigate('trivia') };      

    // const verifyUser = () => {
    //     const requestBody = 
    // }

    return (
        <div className="initialContainer">
            <h1 className="landingH1">Log In</h1>
            <div className="signInArea">
            <form className="formsArea">
                <input className="landingInput" type="text" placeholder="username"></input>
                <input className="landingInput" type="text" placeholder="password"></input>
            </form>
            <button className="landingButton" onClick={navigateToTrivia}>enter</button>
            </div>
        </div>
    );
}