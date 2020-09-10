import React from "react";
import "@babel/polyfill";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {hot} from "react-hot-loader";


import Nav from '../Nav/index.jsx';
import Home from '../Home/index.jsx';
import Login from '../Login/index.jsx';
import About from '../../Pages/About/index.jsx';
import history from '../../services/history';

function App() {
    return (
        <Router history={history}>
            <Nav/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
            <Route exact path="/" component={Login} />
        </Router>
    );
}

export default hot(module)(App);