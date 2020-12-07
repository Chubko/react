import React, {Component} from 'react';
import AllComments from "./components/comments/AllComments";
import AllPosts from "./components/posts/AllPosts";

class App extends Component {
    render() {
        return (
            <div>
              <AllComments/>
              <AllPosts/>
            </div>
        );
    }
}

export default App;