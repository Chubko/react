import React, {Component} from 'react';
import AllCommentsComponent from "./components/comments/All Comments Component";
import AllPostsComponent from "./components/posts/All Posts Component";
import AllAlbums from "./components/albums/All albums";
import AllToDo from "./components/todos/All ToDo";

class App extends Component {
    render() {
        return (
            <div>
              {/*<AllCommentsComponent/>*/}
              {/*<AllPostsComponent/>*/}
              {/*<AllAlbums/>*/}
              <AllToDo/>
            </div>
        );
    }
}

export default App;