import React from 'react';
import './ToggleGroup.css';

function ToggleGroup({ handleRadio }) {
    return (
        <div className="switch-field" onChange={e => handleRadio(e)}>
            <input type="radio" id="radio-1" name="switch-one" value="1" />
            <label htmlFor="radio-1">1</label>
            <input type="radio" id="radio-2" name="switch-one" value="2" />
            <label htmlFor="radio-2">2</label>
            <input type="radio" id="radio-3" name="switch-one" value="3" />
            <label htmlFor="radio-3">3</label>
            <input type="radio" id="radio-4" name="switch-one" value="4" />
            <label htmlFor="radio-4">4</label>
            <input type="radio" id="radio-5" name="switch-one" value="5" />
            <label htmlFor="radio-5">5</label>
            <input type="radio" id="radio-6" name="switch-one" value="6" />
            <label htmlFor="radio-6">6</label>
        </div>
    )
}

export default ToggleGroup;