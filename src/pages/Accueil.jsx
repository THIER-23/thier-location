 import "./Accueil.css"
import CarteMaison from "../components/CarteMaison"
import { useState, useEffect } from "react";
 function Accueil(){
  const images = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600"
]

const [imageActuelle, setImageActuelle] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setImageActuelle((actuelle) => (actuelle + 0) % images.length)
  }, 1000)

  return () => clearInterval(interval)
}, [])
const [chargement, setChargement] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setChargement(false)
  }, 2000)
}, [])
if (chargement) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  )
}

    return (
      
        <div>
           <section 
  className="hero"
  style={{ backgroundImage: `url(${images[imageActuelle]})` }}
>
                <div className="hero-content">
                    <h2>Vos Vacances dans un cadre élégant</h2>
                    <h3>Notre Priorité</h3>
                    <p>Découvrez nos maisons d'exception  pour des sejours incroyable</p>
                    <button>Decouvrir nos maisons</button>
                    
                </div>
            </section>
            <section className="proprietes">
  <h2>Nos Propriétés en Vedette</h2>
  <div className="cartes-container">
    <CarteMaison 
      image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ville="Sablière"
      prix="500.000"
      chambres="4"
    />
    <CarteMaison 
      image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
      ville="Batterie 4"
      prix="800.000"
      chambres="6"
    />
    <CarteMaison 
      image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
      ville="Soduco"
      prix="750.000"
      chambres="8"
    />
  </div>
</section>
<section className="pourquoi-nous">
  <h2>Pourquoi Nous Choisir ?</h2>
  <div className="avantages-container">
    <div className="avantage">
      <h3>🏆 Propriétés Vérifiées</h3>
      <p>Toutes nos propriétés sont vérifiées et certifiées par nos agents.</p>
    </div>
    <div className="avantage">
      <h3>⚡ Démarches Rapides</h3>
      <p>Réservez en quelques clics, sans paperasse inutile.</p>
    </div>
    <div className="avantage">
      <h3>💬 Support 24/7</h3>
      <p>Nos agents expérimentés sont disponibles à tout moment.</p>
    </div>
    <div className="avantage">
      <h3>🔒 Paiement Sécurisé</h3>
      <p>Vos transactions sont protégées et sécurisées.</p>
    </div>
  </div>
</section>
<section className="temoignages">
  <h2>Ce que disent nos clients</h2>
  <div className="temoignages-container">
    <div className="temoignage">
      <p>"Une expérience incroyable, le service était impeccable !"</p>
      <h4>— Sophie M.</h4>
      <span>⭐⭐⭐⭐⭐</span>
    </div>
    <div className="temoignage">
      <p>"Des maisons magnifiques, je recommande vivement !"</p>
      <h4>— Jean-Pierre K.</h4>
      <span>⭐⭐⭐⭐⭐</span>
    </div>
    <div className="temoignage">
      <p>"Démarches rapides et équipe très professionnelle."</p>
      <h4>— Amina D.</h4>
      <span>⭐⭐⭐⭐⭐</span>
    </div>
  </div>
</section>

        </div>
        
    );
    
}
export default Accueil;