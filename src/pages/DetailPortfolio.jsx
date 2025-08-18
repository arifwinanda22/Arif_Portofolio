import { useParams, Navigate } from "react-router-dom"
import '../styles/DetailPortfolio.css'
import {portfolioList} from '../data/dataPortfolio'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import ScrollToTop from "../components/ScrollToTop"

function DetailPortfolio() {
    const {id} = useParams();
    const data = portfolioList.find((item) => item.id === id)
    if(data == undefined){
        return <Navigate to='/page-not-found'/>
    }
    console.log(data)
  return (
    <>
    
    <Navbar />
    <section id='detail-portfolio'>
        <div className="wrapper">
  <h1>{data.title}</h1>
  <img src={data.detailImage} alt={data.title || 'portfolio'} />

  {/* ---- BAGIAN YANG DIUBAH ---- */}
  {/* Tampilkan blok ini HANYA JIKA data.id sama dengan '2' */}
  {data.id === '2' && (
    <>
      <img src={data.detailImage2} alt={data.title || 'portfolio'} />
      <img src={data.detailImage3} alt={data.title || 'portfolio'} />
    </>
  )}
  {/* ---- AKHIR BAGIAN YANG DIUBAH ---- */}

  <p className="skill"><b>skills:</b> {data.skill}</p>
  <p className="desc"><b>Description:</b> {data.desc}</p>
</div>
    </section>

    <Footer />
    <ScrollToTop />
    
    </>
    
  )
}

export default DetailPortfolio