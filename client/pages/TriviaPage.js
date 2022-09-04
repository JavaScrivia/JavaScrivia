import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import LeaderBoard from './LeaderBoard';

const TriviaPage = () => {
    
    const [state, setState] = useState({ 
        i: 0,
        codeSnippet: '',
        currentQuestion: '',
        answerExplanation: '',
        answerOptions: {
            A: '',
            B: '',
            C: '',
            D: ''
        }
    })
    
    
    const navigate = useNavigate();

    const logOut = () => { navigate('landing') };

    const grabTrivia = () => {
        fetch(`https://api.javascript-trivia.com/`)
            .then(res => res.json())
            //.then(data => setState({
            //   i: state.i + 1,
            //   codeSnippet: data.questions[state.i].codeSnippet,
            //currentQuestion: data.questions[state.i].question,
            //answerExplanation: data.questions[state.i].answerExplanation,
            //}))
            //
            // PROTOTYPE OF RENDERING BUTTON OPTIONS:
            .then(data => setState({
                i: state.i + 1,
                codeSnippet: data.questions[state.i].codeSnippet,
            currentQuestion: data.questions[state.i].question,
             answerOptions: data.questions[state.i].answerOptions
            }))




            .then(data => console.log(data.questions[state.i]));
        //console.log('this is i', state.i)
    }

    return (
        <div className="wrapper">
            <h1>It's Time To Get JavaSavyyyyy</h1>
            <div className="mainContainer">
                <div className="triviaContainer">
                    <div className="codeSnippet">
                        <p> Prompt: {state.codeSnippet}</p>
                    </div>
                    <div className="questionArea">
                        <p>Question: {state.currentQuestion}</p>
                    </div>
                    <div className="answerOptions">
                    <button>A <span> {state.answerOptions.A} </span></button>
                    <button>B <span> {state.answerOptions.B} </span></button>
                    <button>C <span> {state.answerOptions.C} </span></button>
                    <button>D <span> {state.answerOptions.D} </span></button>
                    </div>
                    <div className="explanation">
                        <p>Explanation of answer: {state.answerExplanation}</p>
                    </div> 
                </div>
                <div className="leaderboardContainer">
                    <p>High Scores:</p>
                    <LeaderBoard update={state}/>
                </div>
            </div>
            <button onClick={grabTrivia}>Next Question</button>
            <button className="signOut" onClick={logOut}>Sign Out</button>
            
        </div>
    )
}

export default TriviaPage;