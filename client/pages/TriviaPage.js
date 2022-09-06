import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaderBoard from './LeaderBoard';
import Answer from './Answer';

const TriviaPage = props => {
  const [ explanation, setExplanation ] = useState(false);
  const [ clicked, setClicked ] = useState(false);

  const [state, setState] = useState({
    i: 0,
    codeSnippet: '',
    currentQuestion: '',
    answerExplanation: '',
    answerOptions: {
      A: '',
      B: '',
      C: '',
      D: '',
    },
    correctAnswer: '',
    answerExplanation: '',
  });

  const navigate = useNavigate();

  const logOut = () => {
    navigate('/landing');
  };

  const grabTrivia = () => {
    fetch(`https://api.javascript-trivia.com/`)
      .then(res => res.json())
      .then(data => {
        setState({
          i: state.i + 1,
          codeSnippet: data.questions[state.i].codeSnippet,
          currentQuestion: data.questions[state.i].question,
          answerOptions: data.questions[state.i].answerOptions,
          correctAnswer: data.questions[state.i].correctAnswer,
          answerExplanation: data.questions[state.i].answerExplanation,
        });
        setExplanation(false);
        setClicked(false);
      });
  };

  const changeBoolean = e => {
    if (e.target.innerHTML[0] === state.correctAnswer && clicked === false) {
      let temp = props.score + 1;
      fetch('/api', {
        method: 'PATCH',
        body: JSON.stringify({
            username: props.username,
            score: temp,
        }),
        headers: { 'Content-Type' : 'application/json' },
      })
      .then(res => res.json())
      .then(data => props.setScore(temp))
      .catch(err => console.log('error: ', err))
    }
    setClicked(true);
    setExplanation(true);
  };

  return (
    <div className="wrapper">
      <h1>It's Time To Get JavaSavyyyyy</h1>
      <div className="mainContainer">
        <div className="triviaContainer">
          <div className="codeSnippet">
            <p className="codesnippet">
              {' '}
              Prompt: <br />
              <br />
              {state.codeSnippet}{' '}
            </p>
          </div>
          <div className="questionArea">
            <p>Question: {state.currentQuestion}</p>
          </div>
          <div className="answerOptions">
            {state.answerOptions.A && (
              <button onClick={e => changeBoolean(e)}>
                A {state.answerOptions.A}{' '}
              </button>
            )}
            {state.answerOptions.B && (
              <button onClick={e => changeBoolean(e)}>
                B {state.answerOptions.B}{' '}
              </button>
            )}
            {state.answerOptions.C && (
              <button onClick={e => changeBoolean(e)}>
                C {state.answerOptions.C}{' '}
              </button>
            )}
            {state.answerOptions.D && (
              <button onClick={e => changeBoolean(e)}>
                D {state.answerOptions.D}{' '}
              </button>
            )}
          </div>
          <div className="explanation">
            {explanation && (
              <Answer
                correctAnswer={state.correctAnswer}
                explanation={state.answerExplanation}
              />
            )}
          </div>
        </div>
        <div>
          <h2>Name: {props.username}</h2>
        </div>
        <div className="leaderboardContainer">
          <p>High Scores:</p>
          <LeaderBoard score={props.score}/>
        </div>
      </div>
      <button onClick={grabTrivia}>Next Question</button>
      <button className="signOut" onClick={logOut}>
        Sign Out
      </button>
    </div>
  );
};

export default TriviaPage;


