import { useState } from 'react'
import '../styles/Navbar.css'
import { FaBars } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import {Link} from 'react-router-dom'


function Navbar() {
  const [menuTampil, setMenuTampil] = useState(false)

  const toggleMenu = () => {
    setMenuTampil(!menuTampil)
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">Arif Winanda</Link>
        </div>

        <div className={`menu ${menuTampil ? 'tampil' : ''}`}>
          <ul>
            <li><HashLink to="/#portofolio" onClick={() => setMenuTampil(false)}>Portofolio</HashLink></li>
            <li><HashLink to="/#about" onClick={() => setMenuTampil(false)}>About</HashLink></li>
            <li><Link to="/experience" onClick={() => setMenuTampil(false)}>Experience</Link></li>
          </ul>
        </div>

        <button onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
