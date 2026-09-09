import { useState } from 'react'
import '../styles/Footer.css'
import ContactForm from './ContactForm'

const CONTACT_EMAIL = 'Arifwinanda3340@gmail.com'

function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <footer>
      <div className="footer-top">
        <span>&copy; @ArifLubis._ 2025</span>

        <div className="footer-actions">
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link">
            {CONTACT_EMAIL}
          </a>
          <button
            type="button"
            className="footer-button"
            onClick={() => setIsFormOpen((prev) => !prev)}
          >
            {isFormOpen ? 'Tutup Form' : 'Kirim Pesan'}
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="footer-form-wrapper">
          <ContactForm />
        </div>
      )}
    </footer>
  )
}

export default Footer