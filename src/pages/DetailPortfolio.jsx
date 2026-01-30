// // src/pages/DetailPortfolio.jsx
// import { useParams, Navigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { portfolioList } from '../data/dataPortfolio';
// import '../styles/DetailPortfolio.css';

// const pageTransition = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -30 },
//   transition: { duration: 0.6, ease: "easeOut" }
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.5 }
//   })
// };

// function DetailPortfolio() {
//   const { id } = useParams();
//   const data = portfolioList.find((item) => item.id === id);

//   if (data == undefined) {
//     return <Navigate to='/page-not-found' />;
//   }

//   // Gabungkan semua gambar yang tersedia ke dalam satu array
//   const projectImages = [
//     data.detailImage, 
//     data.detailImage2, 
//     data.detailImage3
//   ].filter(img => img); // Hapus yang undefined/kosong

//   return (
//     <motion.div
//       variants={pageTransition}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="detail-portfolio-container"
//     >
//       <section id='detail-portfolio'>
//         <div className="wrapper">
          
//           {/* JUDUL */}
//           <motion.h1 
//             custom={0} variants={contentVariants} initial="hidden" animate="visible"
//           >
//             {data.title}
//           </motion.h1>

//           {/* --- GALERI GAMBAR TERINTEGRASI --- */}
//           {/* Ini kuncinya: Semua gambar (IoT & MQTT) masuk dalam satu grid */}
//           <motion.div 
//             className="project-gallery"
//             custom={1} variants={contentVariants} initial="hidden" animate="visible"
//           >
//             {projectImages.map((img, index) => (
//               <div key={index} className="gallery-item">
//                 <img src={img} alt={`Project View ${index + 1}`} />
//               </div>
//             ))}
//           </motion.div>
//           {/* ---------------------------------- */}

//           {/* INFO & SKILLS */}
//           <motion.div 
//             className="portfolio-info"
//             custom={2} variants={contentVariants} initial="hidden" animate="visible"
//           >
//             <div className="skill-badge">
//               <span className="label">Tech Stack:</span>
//               <span className="value">{data.skill}</span>
//             </div>
            
//             <div className="description-box">
//               <h3>Description</h3>
//               <p>{data.Description || "No description provided."}</p>
//             </div>
//           </motion.div>

//         </div>
//       </section>
//     </motion.div>
//   );
// }

// export default DetailPortfolio;

// src/pages/DetailPortfolio.jsx
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioList } from '../data/dataPortfolio';
import '../styles/DetailPortfolio.css';
import { FaExternalLinkAlt } from "react-icons/fa"; 

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

function DetailPortfolio() {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id === id);

  if (data == undefined) {
    return <Navigate to='/page-not-found' />;
  }

  // Menggabungkan semua gambar yang ada menjadi satu array (Main + Extra)
  const projectImages = [
    data.detailImage, 
    data.detailImage2, 
    data.detailImage3
  ].filter(img => img);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="detail-portfolio-container"
    >
      <section id='detail-portfolio'>
        <div className="wrapper">
          
          {/* JUDUL */}
          <motion.h1 
            custom={0} variants={contentVariants} initial="hidden" animate="visible"
          >
            {data.title}
          </motion.h1>

          {/* GALERI GAMBAR (GRID) */}
          <motion.div 
            className="project-gallery"
            custom={1} variants={contentVariants} initial="hidden" animate="visible"
          >
            {projectImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Project View ${index + 1}`} />
              </div>
            ))}
          </motion.div>

          {/* TOMBOL LINK PROJECT (Hanya muncul jika demoLink ada) */}
          {data.demoLink && (
            <motion.div 
              className="demo-link-container"
              custom={1.5} variants={contentVariants} initial="hidden" animate="visible"
            >
              <a 
                href={data.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-demo"
              >
                <FaExternalLinkAlt style={{ marginRight: '8px' }} />
                Visit Live Project
              </a>
            </motion.div>
          )}

          {/* INFO & SKILLS */}
          <motion.div 
            className="portfolio-info"
            custom={2} variants={contentVariants} initial="hidden" animate="visible"
          >
             <div className="skill-badge">
              <span className="label">Tech Stack:</span>
              <span className="value">{data.skill}</span>
            </div>
            
            <div className="description-box">
              <h3>Description</h3>
              {/* Memanggil data.desc (sesuai yang diupdate di dataPortfolio.jsx) */}
              <p>{data.desc || "No description provided."}</p>
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}

export default DetailPortfolio;