import React, {Component} from 'react';
import {CommentService} from "../services/CommentService";
import Comment from "./Comment";

class AllComments extends Component {
    commentService = new CommentService();
    state = {comments: []};

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
            this.setState({comments});
    }

    render() {
        let {comments}=this.state;
        return (
            <div>
                {comments.map(value =>
                <Comment item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllComments;