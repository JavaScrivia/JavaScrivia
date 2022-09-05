import React, { useState } from 'react';


const Answer = ({correctAnswer, explanation}) => {

    return (
        <div>
            <p>Correct answer: {correctAnswer}</p>
            <p>Explanation of answer: {explanation}</p>
        </div>
        
    )

}

export default Answer;