// src/components/Portofolio.jsx
import '../styles/Portofolio.css'
import { portfolioList } from '../data/dataPortfolio'
import { Link } from 'react-router-dom'

function Portofolio() {
  return (
    <section id="portofolio">
      <div className="wrapper">
        {/* BAGIAN INI DIUBAH */}
        <h3>My Projects</h3>
        
        <div className="grid">
          {
            portfolioList.map((item) => (
              <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`} className="portfolio-link">
                  <div className="portfolio-thumb">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="overlay">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portofolio