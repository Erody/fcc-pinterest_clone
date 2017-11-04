import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import PictureList from './PictureList'

const Routes = () => {
    return(
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/signup" component={Signup} exact/>
            <Route path="/pictures" component={PictureList} exact/>
        </Switch>
    )
};

export default Routes;