import React, {Component} from 'react';
import ToDoComponent from "./ToDo Component";

class AllToDo extends Component {
    state = {toDo:[], chosenToDo: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(toDosFromApi=>{
                this.setState({toDo:toDosFromApi})
            })
    }

    selectToDo = (id)=>{
        let chosenToDo = this.state.toDo.find(value => value.id===id);
        this.setState({chosenToDo})
    }

    render() {
        let {toDo, chosenToDo} = this.state;
        return (
            <div>
                {toDo.map(value =>
                <ToDoComponent item={value} key={value.id} selectToDo={this.selectToDo}/>
                )}
                <hr/>
                {chosenToDo && <ToDoComponent item={chosenToDo}/>}
            </div>
        );
    }
}

export default AllToDo;