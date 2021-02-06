import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
    return(
        <div className="CardDesign">
            <p>My Name Is {props.username} , My Proffesion is <span> {props.work} </span>And My Age is {props.age}</p>
        </div>
    )
}


export default userOutput;