import React from 'react';
import WishList from "./WishList";
import Cart from "./Cart";

const AppHeader = ()=>{
    return(
        <div className= 'd-flex justify-content-end'>
            <WishList/>
            <Cart/>
        </div>
    )
}

export default AppHeader;