// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePicture from '../assets/PP2.jpg'; 
import '../styles/Header.css';

// 1. UPDATE IMPORT: Tambahkan FaFilePdf
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from 'react-icons/fa';

// 2. IMPORT FILE CV (Pastikan file ini ada di folder src/assets/)
// import cvFile from '../assets/CV_Arif_Winanda_Lubis.pdf'; 
import cvFile from '../assets/CV_ATS_Arif Winanda Lubis (1).pdf';  

// Array peran/roles yang akan ditampilkan secara bergantian

const roles = [
  "Information Technology Fresh Graduate from Telkom University",
  "Web Developer Enthusiast",
  "Backend Enthusiast",
  "AI Enthusiast",
  "IoT Enthusiast"
];

function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="header-overlay"></div>

      <div className="header-jumbotron">
        
        {/* BAGIAN KIRI */}
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}    
          transition={{ duration: 0.8 }}
        >
          <h3>Arif Winanda Lubis</h3>
          
          {/* Container Teks Bergerak */}
          <div className="rotating-text-wrapper">
            <span className="static-text">I am a </span>
            
            {/* Area Teks Berubah */}
            <div className="dynamic-text-area">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index} 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}  
                  exit={{ y: -20, opacity: 0 }}   
                  transition={{ duration: 0.3 }}
                  className="dynamic-text"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="description-text">
            Passionate about build and learn about any technology and exploring new technologies.
          </p>
          
          {/* Social Media & CV Button */}
          <div className="socialMedia">
            {/* Github */}
            <motion.a 
                href="https://github.com/arifwinanda22" 
                target="_blank" rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, color: "#38bdf8" }}
            >
                <FaGithub />
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
                href="https://linkedin.com/in/arif-winanda-190b05270" 
                target="_blank" rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, color: "#38bdf8" }}
            >
                <FaLinkedin />
            </motion.a>  

            {/* Instagram */}
            <motion.a 
                href="https://www.instagram.com/ariflubis._/" 
                target="_blank" rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, color: "#38bdf8" }}
            >
                <FaInstagram />
            </motion.a>

            {/* --- TOMBOL CV PDF --- */}
            <motion.a 
                href={cvFile} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Download My CV"
                whileHover={{ scale: 1.2, color: "#ef4444" }} // Warna merah saat hover (khas PDF)
            >
                <FaFilePdf />
            </motion.a>

          </div>
        </motion.div>

        {/* BAGIAN KANAN */}
        <motion.div 
          className="header-image"
          initial={{ opacity: 0, x: 50, scale: 0.8 }} 
          animate={{ opacity: 1, x: 0, scale: 1 }}     
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={profilePicture} alt="Arif Winanda Lubis" />
        </motion.div>

      </div>
    </header>
  )
}

export default Header;