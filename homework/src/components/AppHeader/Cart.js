import React from 'react';
import {useSelector} from 'react-redux';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, Switch} from "react-router-dom";
import CartModal from "./CartModal";

library.add(
    faShoppingCart
);

export default function Cart(){
    let cart = useSelector(({cart})=> cart);
    let counter = cart.length;

    return(
        <div>
            <Link to={'/cart'}><FontAwesomeIcon icon={['fa', 'shopping-cart']} className="header-icon"/></Link>
            <span className='counter'>{counter}</span>
            <Switch>
                <Route path={'/cart'}>
                    <CartModal/>
                </Route>
            </Switch>
        </div>
    )
}