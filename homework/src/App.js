import React, {Component} from 'react';
import AllCommentsComponent from "./components/comments/All Comments Component";
import AllPostsComponent from "./components/posts/All Posts Component";

class App extends Component {
    render() {
        return (
            <div>
              <AllCommentsComponent/>
              <AllPostsComponent/>
            </div>
        );
    }
}

export default App;