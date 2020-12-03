import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {
        let {item, selectComment, status}=this.props;
        return (
            <div>
                {  status || <div> {item.name}-{item.id}</div> }
                {  status &&  <div> {item.name}-{item.id} - {item.body}</div> }

                <button onClick={()=>selectComment(item.id)}>Show comment</button>
            </div>
        );
    }
}

export default CommentComponent;
