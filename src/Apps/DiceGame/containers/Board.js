import React from 'react';
import Dice from '../components/Dice/Dice';

function Board({ diceThrow, score, total }) {
    return (
        <div className="container">
            <div className="board-score text-center">
                Score: {score} / {total} <br />
                Success Rate: {total ? '% ' + ((score / total) * 100).toFixed(2) : '% 0'}
            </div>
            <div className="board-box">
                <Dice showDice={diceThrow} />
            </div>
        </div>
    )
}

export default Board