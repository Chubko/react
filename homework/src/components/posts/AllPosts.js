import React, {Component} from 'react';
import Post from "./Post";
import {PostService} from "../services/PostService";

class AllPosts extends Component {
    postService=new PostService();
    state = {posts:[], chosenPost:null}

    componentDidMount() {
        this.postService.getPosts()
            .then(value => this.setState({posts:value}))
    }
    showPost=(id)=>{
        this.postService.getPostById(id)
            .then(value => this.setState({chosenPost: value}))
    }

    render() {
        let {posts, chosenPost}=this.state;
        return (
            <div>
                {posts.map(value =>
                    <Post
                        item={value}
                        key={value.id}
                        showPost={this.showPost}
                    />
                )}
                <hr/>
                {chosenPost && <h3>{chosenPost.id}-{chosenPost.body}</h3>}
            </div>
        );
    }
}
export default AllPosts;