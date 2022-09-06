import React, { useState, useEffect } from 'react';
import Competitors from './Competitors';

const LeaderBoard = (props) => {
    const [ places, setPlaces ] = useState([]);

    useEffect(() => {
        // console.log('useEffect triggered')
        fetch('/board')
        .then(response => response.json())
        .then(response => {
            response.sort((a,b) => b.score - a.score);
            const finalList = [];
            let key = 1;
            for (const element of response) {
                finalList.push(<Competitors num={key} name={element.username} score={element.score}/>)
                key++;
            }
            setPlaces(finalList);
        })
        .catch((err) => console.log(err.json()));
    }, []);

  return (
    <div>
        {places}
    </div>
  )
}

export default LeaderBoard