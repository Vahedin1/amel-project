import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Pages
import Home from './pages/Home.js';
import Kontakt from './pages/Kontakt.js';
import Vita from './pages/Vita.js';
import NoPage from './pages/NoPage.js';

// Zakoni
import Cookie from './pages/zakoni/Cookie-Richtlinie-EU.js';
import Datenschutzerklarung from './pages/zakoni/Datenschurzerklarung.js';
import Impressum from './pages/zakoni/Impressum.js';

// Leistungen
import Maler from './pages/leistungen/Maler-Spachtelarbeiten.js';
import Maurerbeiten from './pages/leistungen/Maurerbeiten.js';
import Putzabeiten from './pages/leistungen/Putzabeiten.js';
import TrackenBau from './pages/leistungen/TrackenBau.js';
import UmAnbauten from './pages/leistungen/Um-Anbauten.js';

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
            <Route path='/' element={<Home />} />
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
      </BrowserRouter>

    </>
  );
}

export default App;
