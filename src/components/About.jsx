// src/components/About.jsx
import '../styles/About.css'
import { motion } from 'framer-motion';

// Import Icons
import { 
  FaHtml5, FaCss3, FaPhp, FaLaravel, FaJava, FaReact, FaDatabase,
  // Tambahkan icon Office versi FontAwesome (Fa) disini:
  FaFileExcel, FaFileWord, FaFilePowerpoint 
} from "react-icons/fa";

import { FaFlutter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
// Hapus import 'si' yang bermasalah jika tidak dipakai lagi
// import { SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint } from "react-icons/si"; 

function About() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // --- DATA HARD SKILLS (Teknis) ---
  const hardSkills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaFlutter />, name: "Flutter" },
    { icon: <FaDatabase />, name: "SQL" },
    
    // GANTI KE ICON BARU (FontAwesome)
    { icon: <FaFileExcel />, name: "Excel" },
    { icon: <FaFileWord />, name: "Word" },
    { icon: <FaFilePowerpoint />, name: "PowerPoint" },
  ];

  // --- DATA SOFT SKILLS (Interpersonal - Dari CV) ---
  const softSkills = [
    "Teamwork & Collaboration",
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Attention to Detail",
    "Creativity & Innovation",
    "Responsibility",
    "Time Management"
  ];

  return (
    <section id="about">
        <motion.div 
          className="wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            
            <motion.h3 variants={itemVariants}>About Me</motion.h3>
            
            {/* DESKRIPSI DIRI */}
            <motion.div className="about-text-card" variants={itemVariants}>
              <p>
                I am an Undergraduate <strong>Information Technology Student</strong> at Telkom University with a strong background in software development. I have hands-on experience building web and mobile applications using <strong>Java, PHP (Laravel), React, and Flutter</strong>.
              </p>
              <br/>
              <p>
                Possessing strong <strong>analytical and problem-solving skills</strong>, I am a competent team player who excels in communication and precision. I am committed to continuous learning and contributing professionally to the technology industry.
              </p>
            </motion.div>
        
            {/* --- BAGIAN SKILLS --- */}
            <div className="skills-split-container">
              
              {/* BAGIAN 1: HARD SKILLS */}
              <motion.div className="skills-category" variants={itemVariants}>
                <h4>Hard Skills</h4>
                <div className="skills-grid">
                    {hardSkills.map((item, index) => (
                       <motion.div 
                          key={index}
                          whileHover={{ scale: 1.1, color: "#38bdf8", borderColor: "#38bdf8" }}
                          className="skill-card-icon"
                          title={item.name}
                       >
                          {item.icon}
                          <span>{item.name}</span>
                       </motion.div>
                    ))}
                </div>
              </motion.div>

              {/* BAGIAN 2: SOFT SKILLS */}
              <motion.div className="skills-category" variants={itemVariants}>
                <h4>Soft Skills</h4>
                <div className="soft-skills-grid">
                    {softSkills.map((skill, index) => (
                       <motion.div 
                          key={index}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                          className="soft-skill-badge"
                       >
                          {skill}
                       </motion.div>
                    ))}
                </div>
              </motion.div>

            </div>

        </motion.div>
    </section>
  )
}

export default About;