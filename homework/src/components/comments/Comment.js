import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Comment extends Component {
    render() {
        let {match:{url},item}=this.props;
        return (
            <div>
                {item.id}-{item.name}-<Link to={`${url}/${item.id}`}>show comment</Link>
            </div>
        );
    }
}

export default withRouter(Comment);