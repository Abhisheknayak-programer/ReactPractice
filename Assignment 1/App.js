import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";


class App extends Component {
  
    state = {
        username  : "Abhishek",
        proffesion : "Web developer",
        age : 20
    }

    ChangeOverState = (event) => {
        this.setState({
            username  : "Abhishek",
            proffesion : event.target.value,
            age : 20
        })
    }




    render() {
        return (
            <>
                <div className="TaskGiven">
                    <p> Create TWO new components: UserInput and UserOutput <br></br>
                        UserInput should hold an input element, UserOutput one paragraphs <br></br>
                        Output multiple UserOutput components in the App component (any paragraph texts of your choice) <br></br>
                        Pass a username (of your choice) to UserOutput via props and display it there <br></br>
                        Add state to the App component (=&gt; the username) and pass the username to the UserOutput component <br></br>
                        
                        Add a method to manipulate the state (=&gt; an event-handler method) <br></br>
                        Pass the event-handler method reference to the UserInput component and bind it to the input-change event <br></br>
                        Ensure that the new input entered by the user overwrites the old username passed to UserOutput <br></br>
                        Add two-way-binding to your input (in UserInput) to also display the starting username <br></br>
                        Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets <br></br>
                    </p>
                </div>


                <UserInput value={this.state.proffesion} changed={this.ChangeOverState}/>
                <UserOutput 
                        username={this.state.username} 
                        work={this.state.proffesion}
                        age={this.state.age}
                />
                  <UserOutput 
                        username={this.state.username} 
                        work={this.state.proffesion}
                        age={this.state.age}
                />
                <UserOutput 
                        username={this.state.username} 
                        work={this.state.proffesion}
                        age={this.state.age}
                />





              
            </>
        )
    }
}


export default App;