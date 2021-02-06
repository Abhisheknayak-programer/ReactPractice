import React from "react";

const Validation = (props) => {
   
    let validationMessage = "Text Too Short";
    
    if(props.Inputlength > 5){
        validationMessage = "Text Too Long"
    }
   
    return (
        <>
            <p>{validationMessage}</p>
        </>
    )
}

export default Validation;