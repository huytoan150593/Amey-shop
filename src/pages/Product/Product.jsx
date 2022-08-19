import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import { data } from '../../constants/data';
import './Product.css';

// const Product = () => {
//     const params = useParams();
//     const product = data.find(product => product.id.toString() === params.productId);
//     const firstImg = product.images[0];
//     const [url, setUrl] = useState(firstImg);
//     const handleClick = (e) => {
//         const newUrl = e.target.getAttribute("src");
//         setUrl(newUrl);
//     }
//   return (
//     <div className="product">
//             <div className="img-field">
//                 <div className="main-img">
//                     <img src={url} alt="" />
//                 </div>
//                 <div className="list-img">
//                     {product.images.map((item, idx) => {
//                         return (
//                             <img key={idx} src={item} alt="" onClick={e => handleClick(e)}/>
//                         )
//                     })}
//                 </div>
//             </div>
//             <div className="detail-field">
//                 <h1 className="product-name">
//                     {product.name}
//                 </h1>
//                 <h2 className="price">{product.price} &#8364; <br/><small>Tax included</small></h2>
//                 <div id="add-btn">ADD TO CART</div>
//                 <div id="subscription">
//                     <strong>&#9752; Product Detail</strong><br/><br/>
//                     {product.description}
//                 </div>
//             </div>
//         </div>
//   )
// }
const Product = () => {
    return (
        <section id="prodetails" className='section'>
        <div className="single-pro-img">
            <img src={data[0].images[0]} width="100%" id='mainImg' alt="" />
            <div className="small-img-group">
                {data[0].images.map((item,idx) => {
                    return (
                        <div key={idx} className="small-img-col">
                            <img src={item} width="100%" className='small-img' alt="" />
                        </div>
                    )
                })
                }
            </div>
        </div>
        <div className="single-pro-details">
                <h5>Home T-Shirt</h5>
                <h1>Men Fashion T-Shirt</h1>
                <h2>$139</h2>
                <select>
                    <option value="size">Select Size</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                </select>
                <button>Add To Cart</button>
                <h4><strong>&#9827; Product Detail</strong></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea dicta ab quidem voluptas perferendis quia adipisci, animi, necessitatibus blanditiis minima aliquid obcaecati ad, incidunt pariatur. Cum molestiae quis mollitia!</p>
        </div>
    </section>
    )
}
export default Product