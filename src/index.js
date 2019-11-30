import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import DashboardPage from './pages/DashboardPage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('Token')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/signup/" component={SignUpPage} />
            <PrivateRoute path="/dashboard/" component={DashboardPage} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();