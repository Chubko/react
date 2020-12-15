import React, {Component} from 'react';
import Form from "./Form";

class Users extends Component {
    state = {users:[]}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => this.setState({users:value}))
    }

    render() {
        const {users} = this.state;

        return (
            <div>
               <Form items={users}/>
            </div>
        );
    }
}

export default Users;