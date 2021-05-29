import React from 'react';
import './Dice.css';

function Dice({ showDice }) {

    return (
        <div className="scene">
            <div className={`cube show-${showDice}`}>
                <div className="cube__face cube__face--1">
                    <span className="dot"></span>
                </div>
                <div className="cube__face cube__face--2">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="cube__face cube__face--3">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="cube__face cube__face--4">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube__face cube__face--5">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube__face cube__face--6">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dice