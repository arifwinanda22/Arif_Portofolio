// src/App.jsx
import { HashRouter, useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- Import Pages ---
import Home from './pages/Home';
import Experience from './pages/Experience';
import DetailPortfolio from './pages/DetailPortfolio';
import PageNotFound from './pages/PageNotFound';

// --- Import Components ---
import Navbar from './components/Navbar';
import Footer from './components/footer'; 
import ScrollToTop from './components/ScrollToTop';

import './App.css';

// Komponen isi konten (Navbar s/d Footer)
function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio/:id" element={<DetailPortfolio />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

function App() {
  return (
    // KITA PAKAI HASHROUTER DISINI.
    // Karena di main.jsx sudah TIDAK ADA router, maka ini AMAN (Tidak bentrok).
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;