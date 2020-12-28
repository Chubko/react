import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductList} from "../../redux";
import ProductListItem from "../ProductListItem/ProductListItem";
import {ADD_TO_CART, ADD_TO_WISHLIST} from "../../redux/ActionTypes";

export default function ProductList(){
    const dispatch = useDispatch();
    const productList = useSelector(({productList})=> productList);

    let cart = useSelector(({cart})=> cart);
    let wishList = useSelector(({wishList})=> wishList);

    useEffect(()=>{
        fetchProductList(dispatch);
    }, [dispatch]);

    const addToCart = (id)=>{
        let chosenItem = productList.find(value => value.id===id);
        let isInCart = cart.find(value => value.id===id);
        if(isInCart){
            chosenItem.statusCart = false;
            const newCart = [...cart];
            const index = newCart.indexOf(isInCart);
            newCart.splice(index,1);
            cart = [...newCart];
        }else{
            chosenItem.statusCart = true;
            cart = [...cart, chosenItem];
        }
        dispatch({type: ADD_TO_CART, payload: cart})
    }
    const addToWishList = (id)=>{
        let chosenItem = productList.find(value => value.id===id);
        let isInWishList = wishList.find(value => value.id===id);
        if(isInWishList){
            chosenItem.statusWishList = false;
            const newWishList = [...wishList];
            const index = newWishList.indexOf(isInWishList)
            newWishList.splice(index,1);
            wishList = [...newWishList];
        }else{
            chosenItem.statusWishList = true;
            wishList = [...wishList, chosenItem];
        }
        dispatch({type: ADD_TO_WISHLIST, payload: wishList})
    }

    return(
        <div className='d-flex flex-wrap justify-content-around'>
            {productList.map(item =>
                <ProductListItem
                    item={item}
                    key={item.id}
                    addToCart={addToCart}
                    addToWishList={addToWishList}
                />
            )}
        </div>
    )

}