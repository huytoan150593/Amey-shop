import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { data } from '../../constants/data';
import './Product.css';
import Title from '../../components/Title/Title';
import { CartContext } from '../../Context/GlobalContext';
import { useContext } from 'react';

const Product = () => {
    const {setCart, tempAlert} = useContext(CartContext);
    const params = useParams();
    const product = data.find(product => product.id.toString() === params.productId);
    const firstImg = product.images[0];
    const [url, setUrl] = useState(firstImg);
    const handleAddItem = (e) => {
        const newItem = {
            hashCode: Math.random()*10000 + product.id,
            product: product,
            quantity: 1,
            size: "M",
        }
        setCart(cart => [...cart, newItem]);
        var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
        if (mobile) {
            tempAlert("Added",1000, "alert-added" );              
        } else {
            tempAlert("Added", 1000, "alert-added");
        }
    }
    const handleClick = (e) => {
        const newUrl = e.target.getAttribute("src");
        setUrl(newUrl);
    }
    const handleMoveImg = (e) => {
        const length = product.images.length;
        let currentId = 0;
        for(let i=0; i<length; i++){
            if(url === product.images[i]){
                currentId = i;
            }
        }
        if(e.target.id === "next" && currentId < length-1){
            const nextUrl = product.images[currentId + 1];
            setUrl(nextUrl);
        }
        if(e.target.id === "prev" && currentId > 0){
            const prevUrl = product.images[currentId - 1];
            setUrl(prevUrl);
        }
    }
    return (
    <>
        <Title title="Product" />
        <section id="prodetails" className='section'>
            <div className="single-pro-img">
                <div id="main-img">
                    <img src={url} width="100%" alt="" />
                    <div id="move-btn">
                        <span onClick={e => handleMoveImg(e)} id="prev">&#8647;</span>
                        <span onClick={e => handleMoveImg(e)} id="next">&#8649;</span>
                    </div>
                </div>
                <div className="small-img-group">
                    {product.images.map((item,idx) => {
                        return (
                            <div key={idx} className="small-img-col" onClick={e => handleClick(e)}>
                                <img src={item} width="100%" className='small-img' alt="" />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="single-pro-details" data-index={product.id}>
                <h5>{product.collab}</h5>
                <h1>{product.name}</h1>
                <h2>{product.price} k</h2>
                <div id="add-btn" onClick={e => handleAddItem(e)}>Add To Cart</div> 
                <h4><strong>&#9827; Product Detail</strong></h4>
                <div className="product-description">
                    {product.description.map((line,idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default Product