import React , {Component} from "react";
import "./App.css";
import ProjectIntro from "./ProjectIntro/ProjectIntro";
import Person from "./Person/Person";

class App extends Component{
    state = {
        person : [
            {id:"Ak",username:"Abhishek Nayak",age:20},
            {id:"Bk",username:"Kshitun Nayak",age:19},
            {id:"Ck",username:"Adarsh Nayak",age:14}
        ],
        showData : false
    }    

    deleteParaOnTouch = (ParaIndex) =>{
        const AllData = [...this.state.person];
        AllData.splice(ParaIndex,1);
        this.setState(this.state.person = AllData);

        // In this method we are firstb taking one argument of index as from the user means the user will click on the para that index is passed here then alldata is a array storing all the data of the persons then i just used the splice method which is basically used for certain curd operation but here i this case the given index as argument to the function is deleted and then the complete state is upadated once agian
    }


    // Alternative Approch For The Above One

    // deleteParaOnTouch2 = (ParaIndex) =>{
    //     const AllData = this.state.person.slice();
    //     AllData.splice(ParaIndex,1);
    //     this.setState(this.state.person = AllData);
    // }

    
    toggleDatahandler = () => {
        let Data = this.state.showData;
        this.setState({showData:!Data});

        // In this case we are first storing the value of showData from the state into a variable and then returning the reverse value of it so it basically creates a toggling effect

    }



    nameChangeHandler = (event,PersonID) =>{
        const personIndexMatched = this.state.person.findIndex((p)=>{
            return p.id === PersonID;
        });
        
        const person = {
            ...this.state.person[personIndexMatched]
        };

        person.username = event.target.value;

        const persons = [...this.state.person];
        persons[personIndexMatched] = person;

        this.setState({person : persons});

        // In this case first we are finding the index by using the findindex method by passing the id then the desired index will be stored at that variable then we are creating a person which holds a object which contains all the data same as that matched index then we are changing the username by event and then we are creating a array using spread opertor and storing the values in it and then we are updating that matched index with the person which is changed before and atlast we set the state of the original person to persons which is the updated persons.
        }




    render(){

        let LoadData = null;
        if(this.state.showData === true){
            LoadData = (
                <>
                    {this.state.person.map((element,index)=>{
                        return ( <Person 
                                name={element.username}
                                age={element.age}
                                key={index}
                                clicked={()=> this.deleteParaOnTouch(index)}
                                nameChanger={(event)=>this.nameChangeHandler(event,element.id)}
                                />
                            )
                    })}
                </>
            )
        }



        return(
            <>
                <ProjectIntro changed={this.toggleDatahandler}/>
                {LoadData}
            </>
        );
    }
}


export default App;