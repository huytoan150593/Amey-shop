import React from 'react';
import './Products.css';
import { AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { data } from '../../constants/data';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div id='products'>
        <div className="title">Products</div>
        <div className="product-card">
            {data.map((item) => {
                return (
                    <div key={item.id} className="pro">
                        <Link to={`/${item.id}`}><img src={item.images[0]} alt="" /></Link>
                        <div className="des">
                            <span>{item.collab}</span>
                            <h5>{item.name}</h5>
                            <div className="vote">
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                            </div>
                            <h4>{item.price} &#8364;</h4>
                            <AiOutlineShoppingCart className='cart'/>
                        </div>
                    </div>
                    )
                } 
            )}
        </div>
    </div>
  )
}

export default Products