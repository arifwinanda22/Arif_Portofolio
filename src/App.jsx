// src/App.jsx
import { useLocation, Routes, Route } from 'react-router-dom'; // Hapus HashRouter
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

function App() {
  // useLocation BISA dipakai disini karena App sudah dibungkus BrowserRouter di main.jsx
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* AnimatePresence menangani animasi transisi antar halaman */}
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

export default App;