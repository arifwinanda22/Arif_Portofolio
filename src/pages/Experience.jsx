// src/pages/Experience.jsx
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

// Import Gambar Aset
import telkomLogo from '../assets/telkom-logo.png';
import hmitlogo from '../assets/hmit.png';
import diskominfoLogo from '../assets/Diskominfo_Logo.png';

// Definisi animasi transisi
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" }
};

function Experience() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingBottom: '50px' }}
    >
      <div className="wrapper">
        <h1 style={{ color: 'var(--text-primary)' }}>Experience</h1>

        <VerticalTimeline lineColor="#38bdf8">
          
          {/* --- Item 1: Telkom University --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - Present"
            icon={
              <img
                src={telkomLogo}
                alt="Telkom University"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            }
            iconStyle={{ background: '#fff', color: '#fff' }}
            contentStyle={{ background: '#1e293b', color: '#f1f5f9', borderBottom: '3px solid #38bdf8', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
            contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
            dateClassName="date-text"
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#38bdf8', fontWeight: 'bold' }}>
              Undergraduate of Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px', color: '#94a3b8' }}>
              Telkom University
            </h4>
            
            <ul style={{ paddingLeft: '20px', marginTop: '15px', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Studied and practiced <strong>algorithm logic</strong> (Mathematical Logic, Calculus, Probability Theory, Matrix Algebra, Discrete Mathematics, Algorithm Complexity Analysis).</li>
              <li>Learned basic programming logic using <strong>Go Language (Golang)</strong>.</li>
              <li>Mastered data structure logic using <strong>C++</strong> with Codeblocks.</li>
              <li>Practiced Database management using <strong>ERD (Entity Relationship Diagram)</strong> and <strong>MySQL</strong>.</li>
              <li>Developed MVC web applications using <strong>PHP (Laravel)</strong>.</li>
              <li>Developed MVC web applications using <strong>Java (Object Oriented Programming)</strong>.</li>
            </ul>
          </VerticalTimelineElement>

          {/* --- Item 2: HMIT --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - Present"
            icon={
              <img
                src={hmitlogo}
                alt="HMIT_TELU"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            }
            iconStyle={{ background: '#fff', color: '#fff' }} 
            contentStyle={{ background: '#1e293b', color: '#f1f5f9', borderBottom: '3px solid #38bdf8', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
            contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#38bdf8', fontWeight: 'bold' }}>
              INFORMATION TECHNOLOGY STUDENT ASSOCIATION (HMIT)
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px', color: '#94a3b8' }}>
              Telkom University
            </h4>
            
            <ul style={{ paddingLeft: '20px', marginTop: '15px', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Serving as <strong>Chairman (President)</strong> of HMIT Telkom University for the 2025/26 period.</li>
              <li>Served as Junior Staff (Intern) in the Student Affairs division (2023/24).</li>
              <li>Served as Staff in the Student Affairs division (2024/25).</li>
              <li>Managed and executed the “FUN-IT” work program (weekly sports event) to develop students' non-academic interests and talents.</li>
              <li>Contributed as <strong>Event Planner Team (EPT)</strong> staff in student cadreization activities.</li>
            </ul>
          </VerticalTimelineElement>

           {/* --- Item 3: Diskominfo Jabar --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2025 - September 2025"
            icon={
              <img
                src={diskominfoLogo}
                alt="Diskominfo_Jabar"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            }
            iconStyle={{ background: '#fff', color: '#fff' }} 
            contentStyle={{ background: '#1e293b', color: '#f1f5f9', borderBottom: '3px solid #38bdf8', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
            contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#38bdf8', fontWeight: 'bold' }}>
              Internship Staff (Web Developer)
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px', color: '#94a3b8' }}>
              Dinas Komunikasi dan Informatika Provinsi Jawa Barat (Diskominfo Jabar)
            </h4>
            
           <ul style={{ paddingLeft: '20px', marginTop: '15px', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Developed a <strong>dynamic filtering system</strong> for the employee dashboard (300+ employees) using <strong>JavaScript DataTables</strong>, increasing search efficiency by 70%.</li>
              <li>Created <strong>interactive data visualizations</strong> with Chart.js (bar & pie charts) for personnel composition transparency (PNS, PPPK, Non-ASN).</li>
              <li>Fixed critical bugs in the Excel export feature (NIP ending in 000) using <strong>PhpSpreadsheet</strong>, ensuring 100% data accuracy.</li>
              <li>Resolved <strong>PDF generation</strong> issues on the employee leave dashboard by implementing dynamic configuration.</li>
              <li>Analyzed <strong>Laravel logs</strong> on Ubuntu server to identify system errors and drafted recommendations for server upgrade to Ubuntu 22.04 LTS.</li>
              <li>Restored missing <strong>cron-jobs</strong> to ensure system automation (reminders & periodic reports) runs on schedule.</li>
              <li>Developed an <strong>archive management module</strong> with <em>Role-Based Access Control</em> for data access transparency.</li>
            </ul>
            
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </motion.div>
  );
}

export default Experience;