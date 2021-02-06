import React from "react";
import "./ProjectIntro.css";

const ProjectIntro = (props) =>{

    const style = {
        "padding" : "10px",
    }

    return (
        <div>  
            <h1>My Person Card Design</h1>
            <p className="FirstPara">Get Ready To See The Magic Just Click On The Below Button To Toogle The On Going Effect</p>
            <button style={style} onClick={props.changed}>Click Me</button>
        </div>
    );
}

export default ProjectIntro;