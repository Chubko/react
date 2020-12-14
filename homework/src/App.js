import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UsersList from "./UsersList/UsersList";

function App() {
  return (
      <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Header-logo" alt="logo" />

            <div className='Header-link'><Link to={'/'}>Home</Link></div>
            <div className='Header-link'><Link to={'/users'}>Users</Link></div>


      </header>

      <main>
          <Switch>
              <Route path={'/'} exact render={()=>
                  <div className="App-main">
                      <div className="App-main-title">React</div>
                      <div className="App-main-logo"><img src={logo} className="Main-logo" alt="logo" /></div>
                  </div>}/>
              <Route path={'/users'} render={()=><div className="App-main"><div className="App-main-title">Users</div>
                  <UsersList/></div>}
                  />
          </Switch>

      </main>
    </div>
      </Router>
  );
}

export default App;
