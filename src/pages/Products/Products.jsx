import './Products.css';
import { AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { data } from '../../constants/data';
import { Link, Outlet } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { CartContext } from '../../Context/GlobalContext';
import { useContext } from 'react';
const Products = () => {
    const {handleAddToCart} = useContext(CartContext);
  return (
    <div id='products'>
        <Title title="All Item"/>
        <Outlet />
        <div className="product-card">
            {data.map((item) => {
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
                            <h4>{item.price} &#8364;</h4>
                            <AiOutlineShoppingCart className='cart' onClick={e => handleAddToCart(e)}/>
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