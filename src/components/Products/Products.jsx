import React from 'react';
// import { useState } from 'react';
import { AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import './Products.css';

export const Products = () => {
    const data = [
        "./assets/henlyLightWash/1.jpg",
        "./assets/Áo Polo cổ V chất cotton co giãn 4 chiều/1.jpg",
        "./assets/áo polo dài tay khoá kéo (đen trắng)/1.jpg",
        "./assets/Áo polo khoá kéo 3 màu (đen xám trắng)/1.jpg",
        "./assets/Áo sơ mi cổ trụ form slim fit (đen trắng)/1.jpg",
        "./assets/Áo sơ mi form slimfit co giãn 4 chiều (đen trắng)/1.jpg",
        "./assets/Áo sơ mi ngắn tay  form slimfit co giãn 4 chiều/1.jpg",
        "./assets/áo tshirt oversize xám tro/1.jpg",
        "./assets/Áo Tshirt slimfit cotton 100%/1.jpg",
        "./assets/chinos đen co giãn 4 chiều/1.jpg",
        "./assets/oversize cổ lửng cotton (đen  trắng)/1.jpg",
        "./assets/quần âu đen cropped co giãn 4 chiều/1.jpg",
        "./assets/quần âu kẻ caro co giãn 4 chiều/1.jpg",
        "./assets/quần âu xám co giãn 4 chiều/1.jpg",
        "./assets/short jean rách co giãn 4 chiều (xanh đen)/1.jpg",
        "./assets/short jeans trơn co giãn 4 chiều (đen xanh)/1.jpg",
        "./assets/skinny jean rách các loại (đen xanh)/1.jpg",
        "./assets/skinny jeans đen rách khoá kéo(gối+đùi) co giãn 4 chiều/1.jpg",
        "./assets/skinny jeans rách gối co giãn chiều(đen xanh)/1.jpg",
        "./assets/skinny jeans trắng rách co giãn 4 chiều/1.jpg",
        "./assets/skinny jeans trơn co giãn 4 chiều (đen xanh)/1.jpg",
        "./assets/skinny Jeans xám tro rách co giãn 4 chiều/1.jpg",
        "./assets/skinny Jeans xám tro rách gấu + gối khoá kéo/1.jpg",
        "./assets/skinny jeans xanh rách (gối+đùi) co giãn 4 chiều/1.jpg",
    ]
    // const [url, setUrl] = useState(data[0]);
    // const handleClick = (e) => {
    //     const newUrl = e.target.getAttribute('src');
    //     setUrl(newUrl);
    //     console.log(newUrl);
    // }
  return (
    <div id='products'>
        <div className="title">Products</div>
        {/* <div className="product">
            <div className="img-field">
                <div className="main-img">
                    <img src={url} alt="" />
                </div>
                <div className="list-img">
                    {data.map((item,idx) => {
                        return (
                            <img key={idx} src={item} alt="" onClick={e => handleClick(e)}/>
                        )
                    })}
                </div>
            </div>
            <div className="detail-field">
                <h1 className="product-name">
                    Henry Light Wash T-Shirt
                </h1>
                <h2 className="price">100 &#8364; <br/><small>Tax included</small></h2>
                <div id="add-btn">ADD TO CART</div>
                <div id="subscription">
                    <strong>&#9752; Product Detail</strong><br/><br/>
                    &#8594;  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ea quaerat consequuntur, temporibus distinctio libero ex odit? Quae, dolore sit sed fuga natus velit quia sequi in doloribus cum eaque.<br/>
                    &#8594;  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iste voluptatum nostrum minima quas, nobis voluptates numquam in atque amet magnam eaque consectetur eum aspernatur dolorem ea expedita veniam repudiandae!<br/>
                </div>
            </div>
        </div> */}
        <div className="product-card">
            {data.map((item,idx) => {
                return (
                    <div key={idx} className="pro">
                        <img src={item} alt="" />
                        <div className="des">
                            <span>Adidas</span>
                            <h5>Product Name</h5>
                            <div className="vote">
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                                <AiOutlineStar color='rgb(243,181,25)' size="18px"/>
                            </div>
                            <h4>100 &#8364;</h4>
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
