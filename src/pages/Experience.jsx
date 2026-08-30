// src/pages/Experience.jsx
// ==============================================================
// Halaman Experience — dipisah menjadi 3 kategori:
// 1. Pekerjaan (work)
// 2. Organisasi (organization)
// 3. Sertifikasi & Pelatihan (certification)
// Dilengkapi statistik persentase kontribusi tiap kategori
// berdasarkan total durasi (bulan) pengalaman.
// ==============================================================

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import Gambar Aset (sesuaikan path dengan struktur folder Anda)
import telkomLogo from '../assets/telkom-logo.png';
import hmitLogo from '../assets/hmit.png';
import diskominfoLogo from '../assets/Diskominfo_Logo.png';
import setdaLogo from '../assets/setda-logo.png';
import azureLogo from '../assets/azure-logo.png';
import udemyLogo from '../assets/udemy-logo.png';
import codingStudioLogo from '../assets/coding-studio-logo.png';
import sreLogo from '../assets/sre-logo.png';

// ==============================================================
// Konfigurasi kategori (warna & label)
// ==============================================================
const CATEGORY_CONFIG = {
  work: {
    label: 'Pekerjaan',
    color: '#38bdf8',
    bgSoft: 'rgba(56, 189, 248, 0.12)',
  },
  organization: {
    label: 'Organisasi',
    color: '#a78bfa',
    bgSoft: 'rgba(167, 139, 250, 0.12)',
  },
  certification: {
    label: 'Sertifikasi & Pelatihan',
    color: '#34d399',
    bgSoft: 'rgba(52, 211, 153, 0.12)',
  },
};

const CATEGORY_ORDER = ['work', 'organization', 'certification'];

// ==============================================================
// Data — bersumber dari CV_ATS_Arif_Winanda_Lubis
// ==============================================================
const EXPERIENCE_DATA = [
  // ---------------- WORK ----------------
  {
    id: 'work-lecturer-assistant',
    category: 'work',
    title: 'Lecturer Assistant of IoT Intelligent Systems',
    organization: 'Faculty of Informatics, Telkom University',
    location: 'Bandung',
    startDate: 'February 2026',
    endDate: 'June 2026',
    icon: telkomLogo,
    points: [
      'Assisted senior lecturers in delivering core concepts of Artificial Intelligence, Machine Learning, and Internet of Things (IoT) architectures to students.',
      'Guided and mentored students through data preprocessing, cleaning, and optimization phases for their IoT system projects.',
      'Evaluated student practical assignments, lab protocols, and embedded hardware configurations using microcontrollers and communication protocols.',
      'Provided technical troubleshooting and advisory support for student-designed smart system integration.',
    ],
  },
  {
    id: 'work-backend-developer',
    category: 'work',
    title: 'Backend Developer',
    organization: 'Web Project by Sekretariat Daerah Pemerintah Provinsi Jawa Barat',
    location: 'Bandung',
    startDate: 'September 2025',
    endDate: 'January 2026',
    icon: setdaLogo,
    points: [
      'Developed a comprehensive internal employee enterprise platform incorporating a daily work reporting module and an asset inventory tracker.',
      'Architected and deployed RESTful APIs built on top of the Laravel (PHP) framework to handle seamless back-end transactions.',
      'Implemented secure Role-Based Access Control (RBAC) layers to protect sensitive government data assets.',
    ],
  },
  {
    id: 'work-web-dev-internship',
    category: 'work',
    title: 'Web Developer Internship',
    organization: 'Dinas Komunikasi dan Informatika Provinsi Jawa Barat (Diskominfo Jabar)',
    location: 'Bandung',
    startDate: 'July 2025',
    endDate: 'September 2025',
    icon: diskominfoLogo,
    points: [
      'Developed a dynamic filtering system for the employee dashboard (300+ employees) using JavaScript DataTables, increasing search efficiency by 70%.',
      'Created interactive data visualizations with Chart.js (bar & pie charts) for personnel composition transparency (PNS, PPPK, Non-ASN).',
      'Fixed critical bugs in the Excel export feature (NIP ending in 000) using PhpSpreadsheet, ensuring 100% data accuracy.',
      'Resolved PDF generation issues on the employee leave dashboard by implementing dynamic configuration.',
      'Analyzed Laravel logs on Ubuntu server to identify system errors and drafted recommendations for a server upgrade to Ubuntu 22.04 LTS.',
      'Restored missing cron-jobs to ensure system automation (reminders & periodic reports) runs on schedule.',
      'Developed an archive management module with Role-Based Access Control for data access transparency.',
    ],
  },

  // ---------------- ORGANIZATION ----------------
  {
    id: 'org-hmit',
    category: 'organization',
    title: 'Chairman (President) — HMIT',
    organization: 'Information Technology Student Association (HMIT), Telkom University',
    location: 'Bandung',
    startDate: 'January 2024',
    endDate: 'January 2026',
    icon: hmitLogo,
    points: [
      'Served as Chairman to lead, direct, and oversee strategic operations, financial budgeting, and work programs for over 58 active committee members.',
      'Spearheaded structural organizational reforms and strategic planning that increased student engagement and external collaboration.',
      'Supervised the execution of large-scale student events, ensuring all milestones were achieved within deadlines and budgetary controls.',
      'Acted as the primary representative to negotiate and maintain relations with university stakeholders, faculty, and external partners.',
      'Progressed from Junior Staff (2023/24) → Staff (2024/25) → Chairman (2025/26) within the Student Affairs division.',
    ],
  },
  {
    id: 'org-sre',
    category: 'organization',
    title: 'Member',
    organization: 'Society of Renewable Energy (SRE), Telkom University',
    location: 'Bandung',
    startDate: 'January 2023',
    endDate: 'December 2024',
    icon: sreLogo,
    points: [
      'Actively participated in focused study groups and workshops on renewable energy technologies and green digital solutions.',
      'Assisted in organizing student-led seminars and community awareness campaigns to promote energy conservation.',
    ],
  },

  // ---------------- CERTIFICATION ----------------
  {
    id: 'cert-azure-ai',
    category: 'certification',
    title: 'Artificial Intelligence Fundamentals (AI-900) — Azure AI',
    organization: 'Elevaite AI by Microsoft',
    startDate: 'February 2026',
    endDate: 'April 2026',
    icon: azureLogo,
    points: [
      'Completed the preparation course for Azure AI Fundamentals (AI-900), organized in collaboration with Microsoft and KOMDIGI.',
      'Mastered core AI/ML concepts, including Microsoft Azure AI services guided by Responsible AI principles.',
    ],
  },
  {
    id: 'cert-java',
    category: 'certification',
    title: 'Java Programming',
    organization: 'Udemy',
    startDate: 'September 2024',
    endDate: 'January 2025',
    icon: udemyLogo,
    points: [
      'Finished a 64.5-hour intensive course covering Java Fundamentals, Object-Oriented Programming (OOP), exception handling, and Standard Classes.',
    ],
  },
  {
    id: 'cert-web-dev',
    category: 'certification',
    title: 'Web Development',
    organization: 'Coding Studio',
    startDate: 'August 2024',
    endDate: 'January 2025',
    icon: codingStudioLogo,
    points: [
      'Completed comprehensive training on Front-End Web Development fundamentals and dynamic website architecture using Laravel 9.',
      'Acquired end-to-end competencies in designing responsive interfaces and managing database-driven architectures.',
    ],
  },
];

// ==============================================================
// Utilitas tanggal — untuk menghitung durasi & persentase
// ==============================================================
const MONTH_MAP = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

function parseFlexibleDate(raw) {
  const value = raw.trim();
  if (/present/i.test(value)) return new Date();

  const parts = value.split(/\s+/);
  if (parts.length >= 2) {
    const monthIndex = MONTH_MAP[parts[0].toLowerCase()];
    const year = parseInt(parts[parts.length - 1], 10);
    if (!Number.isNaN(monthIndex) && !Number.isNaN(year)) {
      return new Date(year, monthIndex, 1);
    }
  }
  const yearOnly = parseInt(parts[parts.length - 1], 10);
  return new Date(Number.isNaN(yearOnly) ? new Date().getFullYear() : yearOnly, 0, 1);
}

function durationInMonths(item) {
  const start = parseFlexibleDate(item.startDate);
  const end = parseFlexibleDate(item.endDate);
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  return Math.max(months, 1); // minimal 1 bulan agar tidak 0
}

// ==============================================================
// Hook — menghitung persentase kontribusi tiap kategori
// ==============================================================
function useExperienceStats(data) {
  return useMemo(() => {
    const totals = {
      work: { months: 0, count: 0 },
      organization: { months: 0, count: 0 },
      certification: { months: 0, count: 0 },
    };

    data.forEach((item) => {
      const months = durationInMonths(item);
      totals[item.category].months += months;
      totals[item.category].count += 1;
    });

    const grandTotal = Object.values(totals).reduce((sum, t) => sum + t.months, 0) || 1;

    return CATEGORY_ORDER.map((category) => ({
      category,
      totalMonths: totals[category].months,
      itemCount: totals[category].count,
      percentage: Math.round((totals[category].months / grandTotal) * 100),
    }));
  }, [data]);
}

// ==============================================================
// Sub-komponen: Avatar ikon dengan fallback inisial
// ==============================================================
function IconAvatar({ src, fallbackLabel, color }) {
  if (src) {
    return (
      <img
        src={src}
        alt={fallbackLabel}
        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
      />
    );
  }
  const initials = fallbackLabel
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: color,
        color: '#0f172a',
        fontWeight: 700,
        fontSize: '0.85rem',
      }}
    >
      {initials}
    </div>
  );
}

// ==============================================================
// Sub-komponen: Statistik persentase per kategori
// ==============================================================
function ExperienceStatsBar({ stats }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        maxWidth: '760px',
        margin: '0 auto 40px',
        padding: '24px',
        borderRadius: '16px',
        background: '#0f172a',
        border: '1px solid rgba(148, 163, 184, 0.15)',
      }}
    >
      {stats.map((stat) => {
        const config = CATEGORY_CONFIG[stat.category];
        return (
          <div key={stat.category}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '6px',
                fontSize: '0.9rem',
              }}
            >
              <span style={{ color: '#e2e8f0', fontWeight: 600 }}>
                {config.label}{' '}
                <span style={{ color: '#64748b', fontWeight: 400 }}>
                  ({stat.itemCount} pengalaman)
                </span>
              </span>
              <span style={{ color: config.color, fontWeight: 700 }}>{stat.percentage}%</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '999px',
                background: 'rgba(148, 163, 184, 0.15)',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stat.percentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  borderRadius: '999px',
                  background: config.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ==============================================================
// Sub-komponen: Tab filter kategori
// ==============================================================
function CategoryFilterTabs({ active, onChange }) {
  const tabs = [
    { value: 'all', label: 'Semua', color: '#f1f5f9' },
    { value: 'work', label: CATEGORY_CONFIG.work.label, color: CATEGORY_CONFIG.work.color },
    {
      value: 'organization',
      label: CATEGORY_CONFIG.organization.label,
      color: CATEGORY_CONFIG.organization.color,
    },
    {
      value: 'certification',
      label: CATEGORY_CONFIG.certification.label,
      color: CATEGORY_CONFIG.certification.color,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '36px',
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              border: `1px solid ${isActive ? tab.color : 'rgba(148,163,184,0.3)'}`,
              background: isActive ? tab.color : 'transparent',
              color: isActive ? '#0f172a' : '#cbd5e1',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

// ==============================================================
// Sub-komponen: Satu kartu pengalaman
// ==============================================================
function ExperienceCard({ item }) {
  const config = CATEGORY_CONFIG[item.category];

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={`${item.startDate} - ${item.endDate}`}
      icon={<IconAvatar src={item.icon} fallbackLabel={item.organization} color={config.color} />}
      iconStyle={{ background: '#fff', color: '#fff' }}
      contentStyle={{
        background: '#1e293b',
        color: '#f1f5f9',
        borderBottom: `3px solid ${config.color}`,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
      contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
      dateClassName="date-text"
    >
      <span
        style={{
          display: 'inline-block',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: config.color,
          background: config.bgSoft,
          padding: '2px 10px',
          borderRadius: '999px',
          marginBottom: '10px',
        }}
      >
        {config.label}
      </span>

      <h3
        className="vertical-timeline-element-title"
        style={{ color: config.color, fontWeight: 'bold' }}
      >
        {item.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ marginTop: '5px', color: '#94a3b8' }}
      >
        {item.organization}
        {item.location ? ` · ${item.location}` : ''}
      </h4>

      <ul style={{ paddingLeft: '20px', marginTop: '15px', lineHeight: '1.6', fontSize: '0.95rem' }}>
        {item.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

// ==============================================================
// Animasi transisi halaman
// ==============================================================
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

// ==============================================================
// Halaman utama
// ==============================================================
function Experience() {
  const [filter, setFilter] = useState('all');
  const stats = useExperienceStats(EXPERIENCE_DATA);

  const sortedData = useMemo(
    () =>
      [...EXPERIENCE_DATA].sort(
        (a, b) => parseFlexibleDate(b.endDate).getTime() - parseFlexibleDate(a.endDate).getTime()
      ),
    []
  );

  const visibleData = useMemo(
    () => (filter === 'all' ? sortedData : sortedData.filter((item) => item.category === filter)),
    [filter, sortedData]
  );

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingBottom: '50px' }}
    >
      <div className="wrapper">
        <h1 style={{ color: 'var(--text-primary)', textAlign: 'center' }}>Experience</h1>

        <ExperienceStatsBar stats={stats} />
        <CategoryFilterTabs active={filter} onChange={setFilter} />

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <VerticalTimeline lineColor="#38bdf8">
              {visibleData.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </VerticalTimeline>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Experience;