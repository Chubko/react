import {SET_PRODUCT_LIST} from "../ActionTypes";

export const setProductList = (payload)=>({type: SET_PRODUCT_LIST, payload})

export const fetchProductList = async (dispatch)=>{
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(setProductList(data));
    }catch (e){
        console.error(e);
    }
}