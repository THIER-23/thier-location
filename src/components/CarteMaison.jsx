function CarteMaison(props){
    return(
        <div className="carte-maison">
    <img src={props.image} alt="maison" />
    <h3>{props.ville}</h3>
    <p> {props.prix}/nuit </p>
    <p> {props.chambres} chambres</p>
    <button>Voir Plus</button>
        </div>
    )
}
export default CarteMaison;