import React from 'react'
import "./UserOutput.css"

const output = (props) => {
    return (
        <div>
            <p> <b>Username:</b> {props.userName} [This username is <span className="darkBlue">{props.description}</span>]</p>
        </div>
    )
}


export default output; 