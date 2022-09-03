import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

const TriviaPage = () => {
    
    const [state, setState] = useState({ 
        i: 0,
        currentQuestion: ''
    })
    
    
    const navigate = useNavigate();

    const logOut = () => { navigate('landing') };

    const grabTrivia = () => {
        fetch(`https://api.javascript-trivia.com/`)
            .then(res => res.json())
        // .then(data => setState({i : state.i + 1, currentQuestion : data.questions[state.i].question}))
            .then(data => console.log(data.questions[state.i]));
        //console.log('this is i', state.i)
    }

    return (
        <div className="wrapper">
            <h1>It's Time To Get Javascrivvyyyyyyy</h1>
            <div className="mainContainer">
                <div className="triviaContainer">
                    <div className="questionArea">
                        <p>Question: {state.currentQuestion}</p>
                    </div>
                    <div className="answerOptions">
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                    </div>
                </div>
                <div className="leaderboardContainer">
                    <p>High Scores:</p>
                </div>
            </div>
            <button onClick={grabTrivia}>grab trivia</button>
            <button className="signOut" onClick={logOut}>sign out</button>
        </div>
    )
}

export default TriviaPage;