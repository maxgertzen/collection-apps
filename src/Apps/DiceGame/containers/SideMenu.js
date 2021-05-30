import React from 'react';
import imgSrc from '../assets/dice.png'
function SideMenu() {
    return (
        <aside className="side-menu text-center">
            <h1>DICE GAME</h1>
            <p>
                Set your guess, and start throwing the dice!
            </p>
            <img src={imgSrc} alt="dice" />
            <h5>
                Good Luck!
            </h5>
            <div className="msg text-center"></div>
        </aside>
    )
}

export default SideMenu;