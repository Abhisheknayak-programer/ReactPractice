import React from "react";
import "../App.css";


const Person = (props) =>{
    return (
        <div className="PersonDiv">
            <p  onClick={props.clicked}>My Name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>

            <input type="text" value={props.name} onChange={props.nameChanger} />
        </div>
    );
}


export default Person;