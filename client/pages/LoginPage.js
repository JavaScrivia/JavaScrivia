import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function LoginPage () {
    const loginPage = 
            <div className="loginPage">
                <h1>Log In</h1>
                <form className="formsArea">
                    <input type="text" placeholder="username"></input>
                    <input type="text" placeholder="password"></input>
                </form>
                <button className="loginButton">Log In</button>
            </div>

    return { loginPage };
}