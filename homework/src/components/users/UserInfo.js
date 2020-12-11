import React, {Component} from 'react';
import UserService from "../../services/UserService";

class UserInfo extends Component {
    state = {user:null}
    userService = new UserService();

    async componentDidMount() {
        // let {id} = this.props;//для іншого варіанту
        let {match: {params: {id}}} = this.props;
        let user = await this.userService.getUserId(id);
        this.setState({user});
    }

    render() {
        let {user} = this.state;
        return (
            <div>
                {user && <div>{user.id}-{user.name}-{user.username}-{user.email}</div>}
            </div>
        );
    }
}

export default UserInfo;