import React from 'react';
import './ProductListItem.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
library.add(
    faHeart
);

export default function ProductListItem(props){
    const {item, addToCart, addToWishList} = props;
    const cart = useSelector(({cart})=> cart);
    const wishList = useSelector(({wishList})=> wishList);
    let classNameCart = 'ProductListItem-icon cart';
    let classNameWishList = 'ProductListItem-icon wishlist';

    if(item.statusCart){
        classNameCart += ' added';
    }
    if(item.statusWishList){
        classNameWishList += ' added';
    }

    return(
        <div className='ProductList-container'>
            <ListGroup className='ProductListItem'>
                    <img src={item.image}/>
                    {item.title}
                    <br/>
                    Price: {item.price}
                    <br/>
                    <FontAwesomeIcon
                        onClick={()=>addToWishList(item.id)}
                        icon={['fa', 'heart']}
                        className={classNameWishList}/>
                    <FontAwesomeIcon
                        onClick={()=>addToCart(item.id)}
                        icon={['fa', 'shopping-cart']}
                        className={classNameCart}/>
            </ListGroup>
        </div>
    )
}