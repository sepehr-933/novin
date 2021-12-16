import React from 'react';
import {Router,Route} from "react-router-dom";
import Home from "../components/layout/Home";
import Mobile from "../components/layout/Mobile";

const Routes = () => {
    return (
            <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/mobile" component={Mobile}/>
            </Router>
    );
};

export default Routes;