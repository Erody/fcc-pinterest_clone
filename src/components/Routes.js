import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import AddImage from './AddImage';
import PictureList from './PictureList'
import Welcome from './Welcome'
import Profile from './Profile';
import requireAuth from '../utils/requireAuth';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Welcome} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/signup" component={Signup} exact/>
            <Route path="/user/:id" component={Profile} exact/>
            <Route path="/pictures" component={PictureList} exact/>
            <Route patch="/addImage" component={requireAuth(AddImage)} exact/>
        </Switch>
    )
};

export default Routes;