import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";

function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Seorang mahasiswa S1 Teknologi Informasi di Universitas Telkom yang memiliki latar belakang pendidikan dan pelatihan di bidang 
            pengembangan perangkat lunak, pemrograman, dan pengelolaan basis data. Berpengalaman dalam mengembangkan aplikasi 
            berbasis web menggunakan berbagai bahasa pemrograman dan framework seperti Java, PHP (Laravel), serta MySQL. Memiliki 
            keterampilan analitis yang kuat, kemampuan pemecahan masalah, serta pengalaman dalam organisasi kemahasiswaan sebagai 
            pengelola program kerja dan perencana acara.Kompeten dalam bekerja secara tim maupun individu, memiliki komunikasi yang 
            baik, serta mampu bekerja secara teliti dan bertanggung jawab dalam menyelesaikan setiap tugas. Berkomitmen untuk terus 
            mengembangkan keterampilan teknologi dan profesionalisme guna memberikan kontribusi terbaik di bidang teknologi informasi</p>
        
            <h4>Programming Skills</h4>
             <div className="skills">
                <FaHtml5 />
                <FaCss3 />
                <IoLogoJavascript />
                <FaPhp />
                <FaLaravel />
                <FaFlutter />
                <FaJava />
             </div>

        </div>

   
    </section>
  )
}

export default About