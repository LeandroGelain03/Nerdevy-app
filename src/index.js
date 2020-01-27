import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';

import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import DashboardPage from './pages/DashboardPage';
import CardsPage from './pages/cardsPage';
import addFriends from './pages/addFriendsPage';
import EditProfilePage from './pages/editProfilePage';
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
            <Route path="/signup/" exact component={SignUpPage} />
            <PrivateRoute path="/dashboard/" exact component={DashboardPage} />
            <PrivateRoute path="/dashboard/allCards/"  component={CardsPage} />
            <PrivateRoute path="/addFriends" component={addFriends}/>
            <PrivateRoute path="/profile/edit" component={EditProfilePage}/>
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();