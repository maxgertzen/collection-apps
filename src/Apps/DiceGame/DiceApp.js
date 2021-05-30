import React, { useState, useEffect } from 'react';
import Board from './containers/Board';
import SideMenu from './containers/SideMenu';
import User from './containers/User';
import './DiceApp.css';
import { useAudio } from '../../hooks/useAudio';
import success from './assets/success.mp3';
import { getRandomNumber } from './utils/randomizer'

function DiceApp() {
    const [userScore, setUserScore] = useState(0)
    const [computerSelection, setComputerSelection] = useState(0);
    const [userGuess, setUserGuess] = useState(0);
    const [userTotalThrows, setUserTotalThrows] = useState(0);
    const [playingSuccess, toggleSuccessSound] = useAudio(success);

    useEffect(() => {
        const isCorrect = (guess) => {
            if (guess) {
                let correct;
                if (guess === computerSelection) {
                    setUserScore(num => num + 1);
                    correct = true
                    toggleSuccessSound(correct)
                } else {
                    correct = false;
                }
                return correct
            }
        }
        isCorrect(userGuess)
    }, [computerSelection]);

    const spin = (toNumber) => {
        setComputerSelection(0);
        setTimeout(() => {
            setComputerSelection(toNumber);
        }, 500)
    }

    const handleSelect = (number) => {
        setUserGuess(Number(number))
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
        <div className="app-container dice-app">
            <SideMenu />
            <div className="game-container">
                <Board diceThrow={computerSelection} score={userScore} total={userTotalThrows} />
                <User userSelects={handleSelect} throwDice={handleThrowDice} guess={userGuess} />
                <div className="msg text-center">{userGuess ? null : 'Take A Guess'}</div>
            </div>
        </div>)
}

export default DiceApp