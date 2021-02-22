import React , {Component} from "react";
import Classes from "../assets/css/App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Person from "../components/Person/Person";

class App extends Component {

    state = {
        showPersons : false,
        persons : [
            {id:"abhishek1", name:"Abhishek",age:21},
            {id:"abhishek2", name: "Max",age:22},
            {id:"abhishek3", name: "Manuel",age:23}
        ]
    }

    toggleDataHandler = () => {
        const ValueNow = this.state.showPersons;
        this.setState({showPersons : !ValueNow});
    }

    changeNameHandler = (event,id) => {
        const foundPersonId = this.state.persons.findIndex(p =>{
            return p.id === id;
        })

        const selectedPerson = {...this.state.persons[foundPersonId]};
        selectedPerson.name = event.target.value;
        const persons = [...this.state.persons];
        persons[foundPersonId] = selectedPerson;

        this.setState({
            persons : persons
        })
    }


    deleteBox = (PersonIndex) => {
        const myAllPersons = [...this.state.persons];
        myAllPersons.splice(PersonIndex,1);
        this.setState({
            persons : myAllPersons
        })
    }

    render(){

        let DisplayPersons = null;
        if(this.state.showPersons){
            DisplayPersons = (
                this.state.persons.map((element,index)=>{
                    return (
                        <Person 
                        name={element.name}
                        age={element.age}
                        now={element.name}
                        key={element.id}
                        deletebox={() => this.deleteBox(index)}
                        changed={(event) => this.changeNameHandler(event,element.id)}
                        />
                    )
                })
            )
        }



        return (
            <>
            <Cockpit clicked={this.toggleDataHandler} messages={this.props.tittle} personsLength={this.state.persons.length} />

            <br/>

            {DisplayPersons}

            </>
        )
    }

}

export default App;