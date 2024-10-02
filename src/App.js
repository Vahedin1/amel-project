import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Footer from './components/Footer.js';
//Pages
import Home from './pages/Home.js';
import Kontakt from './pages/Kontakt.js';
import Vita from './pages/Vita.js';
import NoPage from './pages/NoPage.js';
import Cookie from './pages/Cookie-Richtlinie-EU.js';
import Datenschutzerklarung from './pages/Datenschurzerklarung.js';
import Impressum from './pages/Impressum';
import Maler from './pages/Maler-Spachtelarbeiten.js';
import Maurerbeiten from './pages/Maurerbeiten.js'; 
import Putzabeiten from './pages/Putzabeiten.js';
import TrackenBau from './pages/TrackenBau.js';
import UmAnbauten from './pages/Um-Anbauten.js';


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
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/vita' element={<Vita />} />
          <Route path='/cookie-richtlinie-eu' element={<Cookie />} />
          <Route path='/datenschutzerklarung' element={<Datenschutzerklarung />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/maler-und-spachtelarbeiten' element={<Maler />} />
          <Route path='/maurerbeiten' element={<Maurerbeiten />} />
          <Route path='/putzabeiten' element={<Putzabeiten />} />
          <Route path='/trackenbau' element={<TrackenBau />} />
          <Route path='/um-anbauten' element={<UmAnbauten />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      <Footer/>

      </BrowserRouter>

    </>
  );
}

export default App;
