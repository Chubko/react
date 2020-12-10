import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "./User";

class AllUsers extends Component {
    userService = new UserService();
    state = {users:[]};

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users})
    }

    render() {
        let {users}=this.state;
        return (
            <div>
                {users.map(value =>
                <User item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllUsers;