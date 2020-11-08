import React from 'react';
import { Switch, Route } from "react-router-dom";
import Cart from '../cart/Cart';
import CheckOut from '../checkout/CheckOut';
import Home from '../home/Home';
import Login from '../login/Login';

function RouterURL() {
    return(
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/checkout">
                <CheckOut/>
            </Route>
        </Switch>
    )
}

export default RouterURL;