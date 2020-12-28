import React from 'react';
import {useSelector} from 'react-redux';
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, Switch} from "react-router-dom";
import WishListModal from "./WishListModal";

library.add(
    faHeart
);

export default function WishList(){
    let wishList = useSelector(({wishList})=> wishList);
    let counter = wishList.length;

    return(
        <div>
                <Link to={'/wishlist'}><FontAwesomeIcon icon={['fa', 'heart']} className="header-icon"/></Link>
                <span className='counter'>{counter}</span>
                <Switch>
                    <Route path={'/wishlist'}>
                        <WishListModal/>
                    </Route>
                </Switch>
        </div>
    )

}