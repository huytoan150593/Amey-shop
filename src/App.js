import './App.css';
import { CartContext } from './Context/GlobalContext';
import { useState } from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog/Blog';
import Collection from './pages/Collection/Collection';
import Cart from './pages/Cart/Cart';
import { data } from './constants/data';

function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (e) => {
    const newItemId = Number(e.target.closest(".pro").dataset.index);
    const newItem = data[newItemId];
    setCart(prev => [...prev, newItem]);
}
  return (
    <HashRouter basename='/'>
      <CartContext.Provider value={{cart, setCart, handleAddToCart}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/:collection' element={<Collection />} />
          <Route path='/item/:productId' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/my-cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
      </CartContext.Provider>
    </HashRouter>
  );
}

export default App;
