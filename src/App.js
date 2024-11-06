import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const theme = createTheme({
  typography: {
    fontFamily: 'Bahnschrift, Arial, sans-serif',
  },
});

function App() {
  return (




    <>
      <ThemeProvider theme={theme}>
        {/* Your component structure here */}


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
            <Route path='/über-uns' element={<Vita />} />
            <Route path='/datenschutzerklarung' element={<Datenschutzerklarung />} />
            <Route path='/impressum' element={<Impressum />} />

            {/* Use CombinedPage for all Leistungen routes */}
            <Route path='/leistungen' element={<CombinedPage />} />

            <Route path='/*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>

      </ThemeProvider>

    </>
  );
}

export default App;
