import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import LeaderBoard from './LeaderBoard';
import Answer from './Answer';

const TriviaPage = () => {
    const [ explanation, setExplanation ] = useState(false);

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
        },
        correctAnswer: '',
        answerExplanation: '',

    })
    
    
    const navigate = useNavigate();

    const logOut = () => { navigate('/landing') };

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
            // .then(console.log(res))
            // PROTOTYPE OF RENDERING BUTTON OPTIONS:
            .then(data => {
                // state.questions[state.i].codeSnippet.replaceAll(/(?:\r\n|\r|\n)/g, '<br />');
                setState({
                i: state.i + 1,
                codeSnippet: data.questions[state.i].codeSnippet,
            currentQuestion: data.questions[state.i].question,
             answerOptions: data.questions[state.i].answerOptions,
             correctAnswer: data.questions[state.i].correctAnswer,
             answerExplanation: data.questions[state.i].answerExplanation
                
            })
            setExplanation(false);
        })

            .then(data => console.log(data.questions[state.i]));
        console.log(data)
    }

    const changeBoolean = () => {
        console.log(state.answerOptions.D)
        setExplanation(true);
    }

    return (
        <div className="wrapper">
            <h1>It's Time To Get JavaSavyyyyy</h1>
            <div className="mainContainer">
                <div className="triviaContainer">
                    <div className="codeSnippet">
                        <p> Prompt: <br/>{state.codeSnippet}</p>
                    </div>
                    <div className="questionArea">
                        <p>Question: {state.currentQuestion}</p>
                    </div>
                    <div className="answerOptions">
                        { state.answerOptions.A && <button onClick={changeBoolean}>A <span> {state.answerOptions.A} </span></button> }
                        { state.answerOptions.B && <button onClick={changeBoolean}>B <span> {state.answerOptions.B} </span></button> }
                        { state.answerOptions.C && <button onClick={changeBoolean}>C <span> {state.answerOptions.C} </span></button> }
                        { state.answerOptions.D && <button onClick={changeBoolean}>D <span> {state.answerOptions.D} </span></button> }
                    </div>
                    <div className="explanation">
                        {explanation && <Answer correctAnswer={state.correctAnswer} explanation={state.answerExplanation}/>}
                        
                    </div> 
                </div>
                <div className="leaderboardContainer">
                    <p>High Scores:</p>
                    <LeaderBoard />
                </div>
            </div>
            <button onClick={grabTrivia}>Next Question</button>
            <button className="signOut" onClick={logOut}>Sign Out</button>
            
        </div>
    )
}

export default TriviaPage;
