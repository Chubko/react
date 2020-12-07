import React, {Component} from 'react';
import Comment from "./Comment";
import {CommentService} from "../services/CommentService";

class AllComments extends Component {
    commentService = new CommentService();
    state = {comments:[], chosenComment:null};

    componentDidMount() {
        this.commentService.getAllComments()
            .then(value => this.setState({comments:value}))
    }

    showComment=(id)=>{
        this.commentService.getCommentById(id)
            .then(value => this.setState({chosenComment:value}))
    }

    render() {
        let {comments, chosenComment}=this.state;
        return (
            <div>
                {comments.map(value =>
                    (<Comment
                        item={value}
                        key={value.id}
                        showComment={this.showComment}
                    />)
                )}
                <hr/>
                {chosenComment && <h2>{chosenComment.id}-{chosenComment.body}</h2>}
            </div>
        );
    }
}

export default AllComments;