import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Button, ListGroupItem} from "reactstrap";
import './User.css'

class User extends Component {
    render() {
        let {item, match:{url}} = this.props;

        return (
                <ListGroupItem>
                    {item.id}. {item.name}
                <Button color="primary" size="sm" className='Button-Details'><Link to={url + `/${item.id}`}>Details</Link></Button>
                <Button color="success" size="sm" className='Button-Posts'><Link to={`${url}/${item.id}/posts/${item.id}`}>Post</Link></Button>
                </ListGroupItem>
        );
    }
}

export default withRouter(User);