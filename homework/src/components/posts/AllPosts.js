import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "./Post";
import {Route, Switch, withRouter} from "react-router-dom";
import PostInfo from "./PostInfo";

class AllPosts extends Component {
    state = {posts:[]};
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {posts.map(value =>
                <Post item={value} key={value.id}/>)}
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=> {
                        const {match: {params: {id}}} = props;
                        return <PostInfo {...props} key={id}/>
                    }
                    }/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllPosts);