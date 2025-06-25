import profilePicture from '../assets/PP2.png'
import '../styles/Header.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} alt="Profile" />
        <h3>Arif Winanda Lubis</h3>
        <p>College Student in Telkom University</p>

        <div className="socialMedia">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header