import React, {Component} from 'react';

class ToDoComponent extends Component {
    render() {
        let {item, selectToDo}=this.props;
        return (
            <div>
                {item.id}-{item.title}
                <button onClick={()=>selectToDo(item.id)}>Show toDo</button>
            </div>
        );
    }
}

export default ToDoComponent;