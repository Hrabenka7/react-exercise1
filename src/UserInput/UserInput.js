import React from 'react'
import './UserInput.css';

const input = (props) => {
    return (
        <div>
            <form className="form">
                <label >Enter your username:</label>
                <input type="text" onChange={props.typed} value={props.currentName}/>   {/*two-way data binding after value*/}
            </form>
        </div>
    )
}

export default input;