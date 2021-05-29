import React, { useState } from 'react';
import ToggleGroup from '../components/ToggleGroup/ToggleGroup';
import UserSelectBox from '../components/UserSelectBox/UserSelectBox';
import { FaDice } from 'react-icons/fa'

function User({ userSelects, throwDice, guess }) {
    const [userSelection, setUserSelection] = useState('')

    const handleSelect = ({ target: { value } }) => {
        setUserSelection(value);
        userSelects(value)
    }

    return (
        <div className="container user-view">
            <button type="button" className="user-btn" onClick={() => throwDice()} disabled={!guess}>
                Throw <FaDice />
            </button>
            <div className="selection-container text-center">
                <ToggleGroup handleRadio={handleSelect} />
                <UserSelectBox userSelection={userSelection} />
            </div>
            {guess ? null : <div className="msg text-center">Take A Guess</div>}
        </div >
    )
}

export default User