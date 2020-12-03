import React, {Component} from 'react';
import CommentComponent from "./Comment Component";

class AllCommentsComponent extends Component {
    state = {comments:[], chosenComment:null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromApi=>{
                this.setState({comments:commentsFromApi})
            })
    }
    selectComment = (id)=>{
        let chosenComment = this.state.comments.find(value=>value.id===id);
        this.setState({chosenComment});
    };

    render() {
        let {comments, chosenComment}=this.state;
        return (
            <div>
                {comments.map(value =>
                    (<CommentComponent
                        item={value}
                        key={value.id}
                        selectComment={this.selectComment}
                        status={false}
                    />)
                )}
                <hr/>
                {
                    chosenComment && <CommentComponent item={chosenComment} status={true}/>
                }
            </div>
        );
    }
}

export default AllCommentsComponent;