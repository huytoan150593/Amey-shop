import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog/Blog';
function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/:productId' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
