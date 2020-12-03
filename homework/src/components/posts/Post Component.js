import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item, selectPost,status}=this.props;
        return (
            <div>
                {status || <div>{item.id}-{item.title}</div>}
                {status && <div>{item.id}-{item.title}-{item.body}</div>}
                <button onClick={()=>selectPost(item.id)}>Show post</button>
            </div>
        );
    }
}

export default PostComponent;