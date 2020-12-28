import {SET_PRODUCT_LIST, ADD_TO_CART, ADD_TO_WISHLIST} from "../ActionTypes";

const initialState = {
    productList: [],
    wishList: [],
    cart: []
}

export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_PRODUCT_LIST:{
            return {...state, productList: action.payload};
        }
        case ADD_TO_CART:{
            return {...state, cart: action.payload}
        }
        case ADD_TO_WISHLIST:{
            return {...state, wishList: action.payload}
        }
        default:{
            return state;
        }
    }
}