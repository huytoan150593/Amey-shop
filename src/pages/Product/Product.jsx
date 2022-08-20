import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { data } from '../../constants/data';
import './Product.css';
import Title from '../../components/Title/Title';

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
    const params = useParams();
    const product = data.find(product => product.id.toString() === params.productId);
    const firstImg = product.images[0];
    const [url, setUrl] = useState(firstImg);
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
        <Title title="Product infomation" />
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
            <div className="single-pro-details">
                    <h5>{product.collab}</h5>
                    <h1>{product.name}</h1>
                    <h2>&#8356; {product.price}</h2>
                    {/* <select>
                        <option value="size">Select Size</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select> */}
                    <button>Add To Cart</button>
                    <h4><strong>&#9827; Product Detail</strong></h4>
                    <p>{product.description}</p>
            </div>
        </section>
    </>
    )
}

export default Product