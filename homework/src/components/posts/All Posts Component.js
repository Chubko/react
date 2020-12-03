import React, {Component} from 'react';
import PostComponent from "./Post Component";

class AllPostsComponent extends Component {
    state = {posts:[], chosenPost:null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromApi=>{
                this.setState({posts:postsFromApi})
            })
    }
    selectPost = (id)=>{
        let chosenPost = this.state.posts.find(value => value.id===id);
        this.setState({chosenPost})
    }

    render() {
        let {posts, chosenPost}=this.state;
        return (
            <div>
                {posts.map(value =>
                    <PostComponent
                        item={value}
                        key={value.id}
                        selectPost={this.selectPost}
                        status={false}/>
                )}
                <hr/>
                {chosenPost && <PostComponent item={chosenPost} status={true}/>}
            </div>
        );
    }
}

export default AllPostsComponent;