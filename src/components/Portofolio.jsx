import '../styles/portofolio.css'
import { portfolioList } from '../data/dataPortfolio'
import { Link } from 'react-router-dom'

function Portofolio() {
  return (
    <section id="portofolio">
      <div className="wrapper">
        <h3>Portofolio</h3>
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
