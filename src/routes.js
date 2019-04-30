import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import HomePage from './screen/HomePage';
import FormPage from './screen/FormPage';
const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/form" component={FormPage} />
        </Switch>
    </BrowserRouter>
);

export default routes;
