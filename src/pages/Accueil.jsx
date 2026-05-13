 import "./Accueil.css"
import CarteMaison from "../components/CarteMaison"
 function Accueil(){
    return (
        <div>
            <section className="hero">
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
        </div>
        
    );
    
}
export default Accueil;