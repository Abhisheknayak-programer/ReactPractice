import React from "react";
import Classes from "../../assets/css/App.module.css";
import "./Cockpit.css";

const cockpit = (props) => {

    const myOtherClasses = [];
    let messages = "";
    if(props.personsLength === 1){
        messages = "The Total Persons is 1";
        myOtherClasses.push('redColor');
        myOtherClasses.push('Bold2');
    } 
    
    if(props.personsLength >= 2){
        messages="The Total Persons Are More Than 1";
        myOtherClasses.push('Bold');
        myOtherClasses.push('redColor');
        myOtherClasses.push(Classes.spaces);
    }


    return (
        <div className={Classes.centered}>
            <h1 className={Classes.spaces}>{props.messages}</h1>
            <h3 className={myOtherClasses.join(' ')}>{messages}</h3>
            <button className={Classes.mybtn} onClick={props.clicked}>Click Me</button>
        </div>
    )
}

export default cockpit;