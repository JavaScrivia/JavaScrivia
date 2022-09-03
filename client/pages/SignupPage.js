import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function SignupPage () {
    
    const navigate = useNavigate();
    
    const navigateToTrivia = () => { navigate('trivia') };     

    return (
        <div className="loginPage">
        <h1>Signup</h1>
        <form className="formsArea">
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
        </form>
        <button className="loginButton" onClick={navigateToTrivia}>Signup</button>
    </div> 
    );
}