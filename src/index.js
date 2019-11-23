import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/loginpPage';
import SignUpPage from './pages/signUpPage'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);


serviceWorker.unregister();
