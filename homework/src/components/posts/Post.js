import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Post extends Component {
    render() {
        let{match:{url},item}=this.props;

        return (
            <div>
                {item.id}-{item.title}-<Link to={`${url}/${item.id}`}>show post</Link>
            </div>
        );
    }
}

export default withRouter(Post);