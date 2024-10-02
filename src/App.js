import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Leistungen from './pages/Leistungen.js';
import Kontakt from './pages/Kontakt.js';
import Vita from './pages/Vita.js';
import NoPage from './pages/NoPage.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <>
    <div className='container'>
      <div className='content'>

      </div>
    </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/leistungen' element={<Leistungen />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/vita' element={<Vita />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
