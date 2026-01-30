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
// Perhatikan: Pastikan nama file footer.jsx di folder components sesuai (kecil/besar)
// Jika error, cek apakah nama filenya 'footer.jsx' atau 'Footer.jsx'
import Footer from './components/footer'; 
import ScrollToTop from './components/ScrollToTop';

import './App.css';

// Komponen Khusus untuk Menangani Logika Routing & Animasi
// Kita butuh ini dipisah agar 'useLocation' bisa berjalan di dalam HashRouter
function AppContent() {
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

function App() {
  return (
    // HashRouter tetap digunakan (dari code lama) agar aman untuk GitHub Pages
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;