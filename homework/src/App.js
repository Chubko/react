import React, {Component} from 'react';
import AppHeader from "./components/AppHeader";
import ProductList from "./components/ProductList";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <ProductList/>
                </div>
            </Router>
        );
    }
}

export default App;