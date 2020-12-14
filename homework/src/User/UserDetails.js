import React, {Component} from 'react';
import UserService from "../services/UserService";
import { ListGroup, ListGroupItem } from 'reactstrap';
import './UserDetails.css'

class UserDetails extends Component {
    state = {user:null}
    userService = new UserService();

    async componentDidMount() {
        let {match:{params:{id}}} = this.props;
        let user = await this.userService.getUser(id);
        this.setState({user});
    }

    render() {
        let {user} = this.state;
        return (
        <div className='User-Details'>
                {user &&
                    <ListGroup>
                        <ListGroupItem>{user.name}<br/><span className='User-Username'>{user.username}</span></ListGroupItem>
                        <ListGroupItem className='User-Details-Item'><b>Phone:</b> {user.phone}</ListGroupItem>
                        <ListGroupItem className='User-Details-Item'><b>Email:</b> {user.email}</ListGroupItem>
                        <ListGroupItem className='User-Details-Item'><b>Website:</b> {user.website}</ListGroupItem>
                    </ListGroup>}
        </div>
        );
    }
}

export default UserDetails;