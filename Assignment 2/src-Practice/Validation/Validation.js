import React from "react";


const validation = (props) =>{
    let validationMessage = "Text too Long !";
    if(props.InputLength <= 5){
        validationMessage = "Text too Short !"
    }

    return (
        <>
            <p>{validationMessage}</p>
        </>
    )
}


export default validation;