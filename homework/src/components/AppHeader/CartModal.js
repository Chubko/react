import React from 'react';
import {useSelector} from 'react-redux';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from "react-router-dom";

export default function CartModal(){
    let cart = useSelector(({cart})=> cart);
    let counter = cart.length;
    let totalPrice = cart.reduce(((acc, value)=>acc+=value.price),0);

    return(
        <div className='main-container'>
            <ListGroup>
                {cart.map(item=>
                    <ListGroupItem className='modal-header'>{item.title} - {item.price}</ListGroupItem>)}
            </ListGroup>
            <div className='total'>{counter} products in total: {totalPrice}</div>

            <Button color="primary" className='modal-button'><Link exact to={'/'}>Close</Link></Button>
        </div>
    )
}