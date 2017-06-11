// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';
//
// ReactDOM.render(<App />, document.getElementById('app'));

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux"

import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import Layout from "./pages/Layout.jsx";
import Winboard from "./pages/Winboard.jsx";

import store from "./store"

const app = document.getElementById('app');

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={Home}/>
                <Route path='edit(/:id)' component={Edit}/>
                <Route path='winboard(/:id)' component={Winboard} />
            </Route>
        </Router>
    </Provider>,
    app);