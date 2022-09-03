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
    // <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/login/trivia" element={<TriviaPage />} />
                    <Route path="/signup/trivia" element={<TriviaPage />} />
                    <Route 
                        path="*" 
                        element={
                            <main>
                                <p>There's no page at this URL!</p>
                            </main>
                        }
                    />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById('root'),
  );
