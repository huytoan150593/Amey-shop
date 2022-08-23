import React from 'react';
import './Cart.css';
import { CartContext } from '../../Context/GlobalContext';
import { useContext } from 'react';

const Cart = () => {
    const {cart} = useContext(CartContext);
  return (
    <div>
        <h1>Hello anh em</h1>
        {cart.map((item,index) => (
            <h3 key={index}>{item}</h3>
        ))}
    </div>
  )
}

export default Cart