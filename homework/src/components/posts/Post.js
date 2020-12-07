import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, showPost}=this.props;
        return (
            <div>
                {item.id}-{item.title}
                <button onClick={()=>showPost(item.id)}>Show post</button>
            </div>
        );
    }
}

export default Post;