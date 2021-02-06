import React from "react";
import "./UserInput.css";

const userInput = (props) => {
    return(
        <div className="MainDiv">
            <input type="text" value={props.value} onChange={props.changed}/>
        </div>
    )
}


export default userInput;