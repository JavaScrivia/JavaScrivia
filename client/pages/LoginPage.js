import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import TriviaPage from './TriviaPage';

export default function LoginPage () {
    
    const navigate = useNavigate();
    
    const navigateToTrivia = () => { navigate('trivia') };      

    return (
        <div className="loginPage">
        <h1>Log In</h1>
        <form className="formsArea">
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
        </form>
        <button className="loginButton" onClick={navigateToTrivia}>Log In</button>
    </div>
    );
}