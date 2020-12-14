import React, {Component} from 'react';
import PostService from "../services/PostService";
import './Posts.css'

class Posts extends Component {
    state = {posts:[]};
    postService = new PostService();

    async componentDidMount() {
        const {id} = this.props;
        let posts = await this.postService.getPost(id);
        this.setState({posts});
    }

    render() {
        const {posts} =this.state;

        return (
            <div className='Post-container'>
                {posts.map(value => <div className='Post-Item'><b>{value.id}. {value.title}</b><br/>{value.body}<hr/></div>)}
            </div>
        );
    }
}

export default Posts;