import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Thier Location</h3>
          <p>Votre destination pour des séjours de luxe inoubliables.</p>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <Link to="/">Accueil</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/connexion">Connexion</Link>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 contact@thierlocation.com</p>
          <p>📞 +241 76262042</p>
          <p>📍 Libreville, Gabon</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Thier Location. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer