import React, { useState, useEffect } from 'react';
import Board from './containers/Board';
import SideMenu from './containers/SideMenu';
import User from './containers/User';
import './DiceApp.css';
import { getRandomNumber } from './utils/randomizer'

function DiceApp() {
    const [userScore, setUserScore] = useState(0)
    const [computerSelection, setComputerSelection] = useState(0);
    const [userGuess, setUserGuess] = useState('');
    const [userTotalThrows, setUserTotalThrows] = useState(0);

    useEffect(() => {
        const isCorrect = () => {
            if (userGuess) {
                let correct;
                if (Number(userGuess) === computerSelection) {
                    setUserScore(num => num + 1);
                    correct = true
                } else {
                    correct = false;
                }
                return correct
            }
        }
        isCorrect()
    }, [userGuess, computerSelection]);

    const spin = (toNumber) => {
        setComputerSelection(0);
        setTimeout(() => {
            setComputerSelection(toNumber);
        }, 500)
    }

    const handleSelect = (number) => {
        setUserGuess(number)
    }



    const handleThrowDice = () => {
        setUserTotalThrows(userTotalThrows => userTotalThrows + 1)
        if (userGuess) {
            let randomNum = getRandomNumber();
            if (randomNum === computerSelection) {
                spin(randomNum)
            } else {
                setComputerSelection(randomNum);
            }
        }
    }

    return (
        <div className="app-container">
            <SideMenu />
            <div className="game-container">
                <Board diceThrow={computerSelection} score={userScore} total={userTotalThrows} />
                <User userSelects={handleSelect} throwDice={handleThrowDice} guess={userGuess} />
            </div>
        </div>)
}

export default DiceApp