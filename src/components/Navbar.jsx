import { Link, } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css"
function NavBar(){
    const [menuOuvert, setMenuOuvert] = useState(false)
    return (
    <nav className="navbar">
    <div className="navbar-logo">Thier Location</div>
    
    <button 
      className="navbar-burger"
      onClick={() => setMenuOuvert(!menuOuvert)}
    >
      ☰
    </button>

    <div className={menuOuvert ? "navbar-links open" : "navbar-links"}>
      <Link to="/">Accueil</Link>
      <Link to="/catalogue">Catalogue</Link>
      <Link to="/connexion">Connexion</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
    );
    
}
export default NavBar;