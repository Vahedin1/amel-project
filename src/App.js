import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';

// Pages
import Home from './pages/Home.js';
import Kontakt from './pages/Kontakt.js';
import Vita from './pages/Vita.js';
import NoPage from './pages/NoPage.js';

// Zakoni
import Datenschutzerklarung from './pages/zakoni/Datenschurzerklarung.js';
import Impressum from './pages/zakoni/Impressum.js';


// Combined Page for Leistungen
import CombinedPage from './pages/Leistungen.js';

function App() {
  return (
    <>
      <div className='container'>
        <div className='content'>
        </div>
      </div>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/vita' element={<Vita />} />
          <Route path='/datenschutzerklarung' element={<Datenschutzerklarung />} />
          <Route path='/impressum' element={<Impressum />} />

          {/* Use CombinedPage for all Leistungen routes */}
          <Route path='/leistungen' element={<CombinedPage />} />

          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
