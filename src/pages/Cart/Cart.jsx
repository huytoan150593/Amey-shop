import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import './Cart.css';
import { CartContext } from '../../Context/GlobalContext';
import { useContext } from 'react';
import Title from '../../components/Title/Title';
import Empty from '../../components/Empty/Empty';
import { Link, Outlet } from 'react-router-dom';

const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const [render, setRender] = useState(false);
    const length = cart.length;
    let total = 0;
    const handleDelete = (e) => {
      const currentHashCode = Number(e.target.closest(".delete-btn").dataset.code);
      const newCart = cart.filter(item => item.hashCode !== currentHashCode);
      setCart(newCart);
    }
    const handleSetSize = (e) => {
      const value = e.target.value;
      const currentHashCode = Number(e.target.dataset.code);
      const currentItem = cart.find(item => item.hashCode === currentHashCode);
      currentItem.size = value;
    }
    const handleSetQuantity = (e) => {
      let value = e.target.value;
      const currentHashCode = Number(e.target.dataset.code);
      const currentItem = cart.find(item => item.hashCode === currentHashCode);
      // true if its a number, false if not
      if(isNaN(+value)){
        e.target.value = "1";
        currentItem.quantity = 1;
      }else{
        currentItem.quantity = Number(value);
      };
      setRender(!render);
      }
  return (
    <div id="my-cart">
      <Title title="My Cart" />
      <div className="order-item-wrapper">
      {(length !== 0) && cart.map((item, idx) => {
        let amount = item.product.price * item.quantity;
        total += amount;
      return (
        <div key={item.hashCode} className="order-item">
          <div className="delete-btn" data-code={item.hashCode} onClick={e => handleDelete(e)}><RiDeleteBin6Line size={30}/></div>
          <div className='order-item-img'><img src={item.product.images[0]} alt="" /></div>
          <p className="order-item-name">{`${idx+1}. ${item.product.name}`}</p>
          <div className='order-item-size'>
            <select name='size' data-code={item.hashCode} onChange={e => handleSetSize(e)}>
                    <option value="M">M</option>
                    <option value="S">S</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
            </select>
          </div>
          <div className='order-item-quantity'>
            <input 
              name='quantity' 
              type="text" 
              defaultValue={item.quantity}
              data-code={item.hashCode}
              onChange={(e) => handleSetQuantity(e)}/>
          </div>
          <div className='order-item-amount'>
            <h4>{amount} k</h4>
          </div>
        </div>
      )})}
      {(length === 0) && (
        <Empty />
        )}
        <div id="total-amount">{`Total: ${total} k`}</div>
        <Link to='order-form'><div className="order-btn">Order Now</div></Link>
        <Outlet />
      </div>
  </div>
  )
}

export default Cart