import React, {Component} from 'react';
import AllComments from "./components/comments/AllComments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AllPosts from "./components/posts/AllPosts";
import AllUsers from "./components/users/AllUsers";


class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <div>
                    <Link to={'/users'}>
                        users
                    </Link>
                </div>
                <div>
                <Link to={'/comments'}>
                    comments
                </Link>
                </div>
                <div>
                    <Link to={'/posts'}>
                        posts
                    </Link>
                </div>
                <Switch>
                    <Route path={'/users'} render={()=>{return <AllUsers/>}}/>
                    <Route path={'/comments'} render={()=>{return <AllComments/>}}/>
                    <Route path={'/posts'} render={()=>{return <AllPosts/>}}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;