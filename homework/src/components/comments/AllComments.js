import React, {Component} from 'react';
import CommentService from "../../services/CommentService";
import Comment from "./Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import CommentInfo from "./CommentInfo";

class AllComments extends Component {
    state = {comments:[]};
    commentService = new CommentService();

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments});
    }

    render() {
        let {comments} = this.state;
        let {match:{url}}=this.props;
        return (
            <div>
                {comments.map(value =>
                <Comment item={value} key={value.id}/>)}
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        const {match:{params:{id}}} = props;
                        return <CommentInfo {...props} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllComments);