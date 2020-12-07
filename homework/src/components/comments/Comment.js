import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item, showComment}=this.props;
        return (
            <div>
                {item.id}-{item.name}
                <button onClick={()=>showComment(item.id)}>Show comment</button>
            </div>
        );
    }
}

export default Comment;