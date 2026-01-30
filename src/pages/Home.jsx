// src/pages/Home.jsx
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Portofolio from '../components/Portofolio';
import About from '../components/About';

// Definisi animasi transisi
const pageTransition = {
  initial: { opacity: 0, y: 20 }, 
  animate: { opacity: 1, y: 0 },  
  exit: { opacity: 0, y: -20 },   
  transition: { duration: 0.5, ease: "easeInOut" } 
};

function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
        {/* Navbar tidak perlu di sini karena sudah ada di App.jsx */}
        
        <Header />
        
        {/* Saya kembalikan urutan ini sesuai kode lama kamu (Portofolio dulu, baru About) */}
        <Portofolio />
        <About />

        {/* Footer tidak perlu di sini karena sudah ada di App.jsx */}
    </motion.div> 
  )
}

export default Home;