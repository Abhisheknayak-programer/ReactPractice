import React from "react";
import Classes from "../assets/css/App.module.css";
import Regester from "../components/Regester/regester";


const App = (props) => {

    const myHeadingClasses = [];
    myHeadingClasses.push(Classes.centerText);
    myHeadingClasses.push(Classes.colorText);
    myHeadingClasses.push(Classes.spaces);
    

    return (
        <>
            <h1 className={myHeadingClasses.join(' ')}>{props.tittle}</h1>
            <Regester />
        </>
    )
}


export default App;