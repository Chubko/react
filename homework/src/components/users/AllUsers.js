import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "./User";
import {Route, Switch, withRouter} from "react-router-dom";
import UserInfo from "./UserInfo";

class AllUsers extends Component {
    userService = new UserService();
    state = {users:[]};

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});

    }

    render() {
        let {users} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {users.map(value =>
                <User item={value} key={value.id}/>)}
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=> {
                        const {match: {params: {id}}} = props;
                        return <UserInfo {...props} key={id}/>;
                        // return <UserInfo id={id} key={id}/>; інший варіант
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers)