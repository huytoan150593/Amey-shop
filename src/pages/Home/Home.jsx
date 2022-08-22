import React from 'react';
import './Home.css';
import Title from '../../components/Title/Title';
import { collection } from '../../constants/data';

const Home = () => {
  return (
    <div id='home'>
      <div id="space">
        <div id="slogan">Brilliant Basics for Men <br/>and Comfortable</div>
        <div id="main-btn">Shop Now</div>
      </div>
      <Title title='Enjoy Our Collections!!!!'/>
      <div className="collection-wrapper">
        {collection.map(item => (
          <div className={item.id%2 === 1 ? "collection-container" : "collection-container reverse"} key={item.id}>
            <div className='collect-img'><img src={item.image} alt="" /></div>
            <div className="collect-event">
              <h1>{item.event}</h1>
              <p>{item.description}</p>
              <div className="shop-btn">View More</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home