import React, {Component} from 'react';
import AllUsers from "./components/users/AllUsers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPosts from "./components/posts/AllPosts";
import AllComments from "./components/comments/AllComments";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/users'}>users</Link>
                </div>
                <div>
                    <Link to={'/posts'}>posts</Link>
                </div>
                <div>
                    <Link to={'/comments'}>comments</Link>
                </div>
                <hr/>
                <Switch>
                    <Route path={'/users'} render={()=><AllUsers/>}/>
                    <Route path={'/posts'} render={()=><AllPosts/>}/>
                    <Route path={'/comments'} render={()=><AllComments/>}/>
                </Switch>
                <hr/>
            </Router>
        );
    }
}

export default App;