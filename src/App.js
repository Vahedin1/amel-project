import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Pricing from './pages/Pricing.js';
import Products from './pages/Product.js';
import NoPage from './pages/NoPage.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/products' element={<Products />} />
          <Route path='/*' element={<NoPage />} />

        </Routes>

      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
