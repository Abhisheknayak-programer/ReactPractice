import React from "react";
import Classes from  "../../assets/css/App.module.css";

const Person = (props) => {
    return (
        <div className={Classes.boxdesign}>
            <h3 onClick={props.deletebox}>My Name is {props.name} my age is {props.age}</h3>
            <br/>
            <input type="text" onChange={props.changed} placeholder="Enter Something To See The Effect" value={props.now}/>
        </div>
    )
}


export default Person;