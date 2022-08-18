import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Products } from './components/Products/Products';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Products />
    </div>
  );
}

export default App;
