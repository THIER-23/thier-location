import { BrowserRouter, Routes, Route, }  from "react-router-dom"
import Accueil from "./pages/Accueil"
import Catalogue from "./pages/Catalogue"
import Connexion from "./pages/Connexion"
import Contact from "./pages/Contact"
import Detail from "./pages/Detail"
import NavBar from "./components/Navbar"



function App (){
    return (
        <BrowserRouter> 
        <NavBar />
        <Routes>
         <Route path="/" element={<Accueil/>} />
        <Route path="/Catalogue" element={<Catalogue/>}/>
        <Route path="/Connexion" element={<Connexion/>} />
        <Route  path="/Contact" element={<Contact/>}/>
        <Route path="/Detail" element={<Detail/>}/>

        </Routes>

        </BrowserRouter>
    );
    
}
export default App;

