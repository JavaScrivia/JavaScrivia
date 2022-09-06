import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from './App';
//import the other pages/components
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import TriviaPage from './pages/TriviaPage';


const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
  );
