import React, {Component} from 'react';
import './User.css'

class UserComponent extends Component {
    render() {
        let {item} = this.props;
        console.log(this.props);
        return (
            <div className='user'>
                {item.name}-{item.age}-{item.status.toString()}
            </div>
        );
    }
}

export default UserComponent;