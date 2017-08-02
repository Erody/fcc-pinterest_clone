import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './Test';
import PictureList from './PictureList'

const Routes = () => {
    return(
        <Switch>
            <Route path="/test" component={Test} exact/>
            <Route path="/pictures" component={PictureList} exact/>
        </Switch>
    )
};

export default Routes;