import React from 'react';
import '../Products/Products.css';
import { AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { data } from '../../constants/data';
import { Link, Outlet, useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { CartContext } from '../../Context/GlobalContext';
import { useContext } from 'react';

const Collection = () => {
    const {handleAddToCart} = useContext(CartContext);
    const collectionName = useParams().collection;
    const collectionItems = data.filter(item => item.collection === collectionName);
  return (
    <div id='collection'>
    <Title title={collectionName} />
    <Outlet />
    <div className="product-card">
        {collectionItems.map((item) => {
            return (
                <div key={item.id} data-index={item.id} className="pro">
                    <Link to={`/item/${item.id}`}><img src={item.images[0]} alt="" /></Link>
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
                        <h4>{item.price} k</h4>
                        <div className='cart-icon' onClick={e => handleAddToCart(e)}><AiOutlineShoppingCart size={30} style={{backgroundColor: 'transparent'}}/></div>
                            <div className="cart-icon-pseudo">Add to Cart</div>
                    </div>
                </div>
                )
            } 
        )}
    </div>
</div>
  )
}

export default Collection