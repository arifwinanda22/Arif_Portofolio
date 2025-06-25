import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import telkomLogo from '../assets/telkom-logo.png';
import hmitlogo from '../assets/hmit.png'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (

    <>

    <Navbar />
    <div className="wrapper">
        <h1>Experience</h1>
    </div>

    <VerticalTimeline>
    <VerticalTimelineElement
  className="vertical-timeline-element--education"
  date="2022-Sekarang"
  icon={
    <img
      src={telkomLogo}
      alt="Telkom University"
      style={{ width: '100%', height: '100%', borderRadius: '50%' }}
    />
  }
  iconStyle={{ background: '#fff', color: '#fff' }} // Atur latar belakang agar cocok
>
  <h3 className="vertical-timeline-element-title">S1 Teknologi Informasi</h3>
  <h4 className="vertical-timeline-element-subtitle">Telkom University</h4>
  <p>
    <li>Mempelajari dan melatih kemampuan dalam mempelajari logika algoritma, seperti logika matematika, kalkulus, Teori Peluang, 
Aljabar Matriks,, Matematika Diskrit, dan Analisis Kompleksitas Algoritma. </li>
  <li>Mempelajari dan melatih kemampuan logika pemrograman di pengenalan pemrograman pertama yaitu menggunakan Bahasa 
pemrograman Go Language (Golang). </li>
    <li>Mempelajari dan melatih kemampuan logika struktur data menggunakan Bahasa Pemrograman C++, dengan Codeblocks 
sebagai develope tools yang digunakan. </li>
  <li>Melatih kemampuan dalam mempelajari Database dengan menggunakan ERD (Entity Relationship Diagram) sebagai dasar 
logika dalam menghubungkan data serta diagram, dilanjutkan dengan memahami MySQL. </li>
<li>Mengembangkan sebuah aplikasi web MVC menggunakan Bahasa pemrograman PHP (Hypertext Preprocessor) dengan 
menggunakan framework Laravel. </li>
<li>Mengembangkan sebuah aplikasi web MVC dengan menggunakan Bahasa Pemrograman Java dengan menggunakan logika 
Pemrograman Berorientasi Objek.</li>
  </p>
</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--education"
  date="2023-Sekarang"
  icon={
    <img
      src={hmitlogo}
      alt="HMIT_TELU"
      style={{ width: '100%', height: '100%', borderRadius: '50%' }}
    />
  }
  iconStyle={{ background: '#fff', color: '#fff' }} 
>
  <h3 className="vertical-timeline-element-title">HIMPUNAN MAHASISWA S1 TEKNOLOGI INFORMASI TELKOM UNIVERSITY</h3>
  <h4 className="vertical-timeline-element-subtitle">HMIT TELKOM UNIVERSITY</h4>
  <p>
    <li>Menjabat sebagai Ketua Himpunan (HMIT) Telkom University Periode 2025/26</li>
    <li>Menjabat sebagai Staff Muda (Staff Magang) di divisi kemahasiswaan Himpunan Mahasiswa S1 Teknologi Informasi periode 
    2023/24. </li>
    <li>Menjabat sebagai Staff di divisi kemahasiswaan Himpunan Mahasiswa S1 Teknologi Informasi periode 2024/25 </li>
    <li>Mengelola dan Menjalankan program kerja “FUN-IT” yang merupakan acara olahraga mingguan sebagai wadah untuk 
    mengembangkan minat dan bakat mahasiswa di bidang non-akademik. </li>
    <li>Berkontribusi sebagai staff Event Planner Team (EPT) di kegiatan kaderisasi mahasiswa S1 Teknologi Informasi </li>

  </p>
</VerticalTimelineElement>
 </VerticalTimeline>

  <Footer />
  <ScrollToTop />
    </>
  )
}

export default Experience