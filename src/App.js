import './App.css';
import ResponsiveAppBar from './components/AppBar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Pricing from './pages/Pricing.js';
import Product from './pages/Product.js';

function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
