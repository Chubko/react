import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../User/User";
import {Route, withRouter} from "react-router-dom";
import UserDetails from "../User/UserDetails";
import Posts from "../Posts/Posts";
import {ListGroup} from 'reactstrap';
import './UserList.css'

class UsersList extends Component {
    state = {users:[]}
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getUsersList();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        let {match:{url}} = this.props;

        return (
            <div className='Main-container'>
                <ListGroup className='User-List'>
                {users.map(value =>
                <User item={value} key={value.id}/>)}
                </ListGroup>

                    <Route exact path={url + '/:id'} render={(props)=>{
                        const {match:{params:{id}}} = props;
                        return <ListGroup><UserDetails {...props} key={id}/></ListGroup>
                    }
                    }/>
                    <Route path={url + '/:id/posts/:id'} render={(props)=> {
                        let {match: {params: {id}}} = props;
                        return <div><ListGroup><UserDetails {...props} key={id}/></ListGroup><Posts id={id} key={id}/></div>
                    }
                    }/>
            </div>
        );
    }
}

export default withRouter(UsersList);