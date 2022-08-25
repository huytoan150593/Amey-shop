import './App.css';
import { CartContext } from './Context/GlobalContext';
import { useState } from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { data } from './constants/data';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog/Blog';
import Collection from './pages/Collection/Collection';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Form from './components/Form/Form';

function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (e) => {
    const newItemId = Number(e.target.closest(".pro").dataset.index);
    const newItem = {
      hashCode: Math.random()*10000 + newItemId,
      product: data[newItemId],
      size: "M",
      quantity: 1
    };
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
          <Route path='/collection/:collection' element={<Collection />} />
          <Route path='/item/:productId' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/my-cart' element={<Cart />}>
            <Route path='order-form' element={<Form />}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      </CartContext.Provider>
    </HashRouter>
  );
}

export default App;
