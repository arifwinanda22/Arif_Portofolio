import Navbar from "../components/Navbar"
import Footer from "../components/footer"

function PageNotFound() {
    return (

    <>
    <Navbar />

    <div className="wrapper">
    <h3>OOPSSS......</h3>
    <p>Halaman yang anda kunjungi tidak ditemukan</p>
    </div>
    
    <Footer />
    </>
    

  )
}

export default PageNotFound