import { Link } from "react-router-dom";
import "./NavBar.css"
function NavBar(){
    return (
        <nav >
        <Link to="/">Accueil</Link>
         <Link to="/Catalogue">Catalogue</Link>
          <Link to="/Connexion">Connexion </Link>
           <Link to="/Contact">Contact</Link>
    </nav>
    );
    
}
export default NavBar;