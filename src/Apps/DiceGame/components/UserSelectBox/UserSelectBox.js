import React from 'react';

function UserSelectBox({ userSelection: selected }) {
    return (
        <div className="user-selection">
            {selected ? selected : ''}
        </div>
    )
}

export default UserSelectBox