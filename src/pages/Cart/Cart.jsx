import React from 'react';
import './Cart.css';
import { CartContext } from '../../Context/GlobalContext';
import { useContext } from 'react';
import Title from '../../components/Title/Title';

const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const length = cart.length;
    let total = 0;
    const handleDelete = (e) => {
      const currentId = Number(e.target.dataset.id);
      const newCart = cart.filter((item,idx) => item.id !== currentId);
      setCart(newCart);
    }
    // let myCart = new Map();
    // let orderItems = [];
    // let obj = [];
    // for(let i=0; i<length; i++){
    //   if(!myCart.has(cart[i])){
    //     myCart.set(cart[i], 1);
    //     orderItems.push(data[cart[i]]);
    //   }else{
    //     myCart.set(cart[i], myCart.get(cart[i])+1);
    //   }
    // }
  return (
    <div id="my-cart">
      <Title title="My Cart" />
      <div className="order-item-wrapper">
      {(length !== 0) && cart.map((item, idx) => {
        total += item.price
      return (
        <div key={idx} className="order-item">
          <div className="delete-btn" data-id={item.id} data-idx={idx} onClick={e => handleDelete(e)}>&#935;</div>
          <div className='order-item-img'><img src={item.images[0]} alt="" /></div>
          <h3 className="order-item-name">{item.name}</h3>
          <div className='order-item-size'>
            <label htmlFor="size">Size</label>
            <select name='size'>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
            </select>
          </div>
          <div className='order-item-quantity'>
            <label htmlFor="quantity">Quantity</label><br/>
            <input 
              name='quantity' 
              type="text" 
              defaultValue="1"
              onChange={(e) => {
              let value = e.target.value;
              if(isNaN(+value)){
                e.target.value = "1";
              }; // true if its a number, false if not
              }}/>
          </div>
          <div className='order-item-amount'>
            <p>Price</p>
            <h4><strong>${item.price}</strong></h4>
          </div>
        </div>
      )})}
      {(length === 0) && (
        <h1>Your Cart is Empty!</h1>
      )}
      </div>
      <h1>{`Total is: ${total}`}&#8466;</h1>
  </div>
  )
}

export default Cart