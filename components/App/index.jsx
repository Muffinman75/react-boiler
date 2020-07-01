import React from "react";
import "@babel/polyfill";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {hot} from "react-hot-loader";

import Home from '../Home/index.jsx';
import Login from '../Login/index.jsx';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home}/>
            </Switch>
        </Router>
    );
}

export default hot(module)(App);