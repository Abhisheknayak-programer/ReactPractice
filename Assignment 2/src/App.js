import React , {Component} from "react";
import "./Css/App.css";
import Validation from "./Validation/Validation";
import Charmode from "./Charmode/Charmode";



class App extends Component{
    state = {
        username : ""
    }
    
    InputChangeHandler = (event) =>{
        this.setState({
            username : event.target.value
        })
    }
  

    DeleteCharHandler = (index) =>{
        const text = this.state.username.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({
            username : updatedText
        })
    }

    render(){

        const charecterArray = this.state.username.split('').map((ch,index)=>{
           return  <Charmode character={ch} key={index} clicked={()=>this.DeleteCharHandler(index)}/>
        });
       


        return(
            <>
               <div className="App">
                    <ol>
                        <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                        
                        <li>Create a new component (=&gt; ValidationComponent) which receives the text length as a prop</li>
                        
                        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>

                        <li>Create another component (=&gt; CharComponent) and style it as an inline box (=&gt; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>

                        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                        
                        <li>When you click a CharComponent, it should be removed from the entered text.</li>
                    </ol>
                    <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                </div>
                <br/>


                

                <div className="WorkingArea">
                    <input type="text" onChange={this.InputChangeHandler} value={this.state.username}/>      
                    {/* <p>{this.state.username}</p> */}

                    <Validation Inputlength={this.state.username.length} />
                    
                    {charecterArray}
                       
                </div>
            </>
        )
    }
}


export default App;