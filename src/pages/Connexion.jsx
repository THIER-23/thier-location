 import { useState} from "react";
 import { supabase } from "../supabase";
 import "./Connexion.css"
 function Connexion(){
    const [email, setEmail]=useState("")
    const [motDePasse, setMotDePasse]=useState("")
    const [mode, setMode]=useState("connexion")
    async function handleSubmit() {
  if (mode === "inscription") {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: motDePasse
    })
    if (error) {
      alert("Erreur : " + error.message)
    } else {
      alert("Vérifie ton email pour confirmer ton compte !")
    }
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: motDePasse
    })
    if (error) {
      alert("Erreur : " + error.message)
    } else {
      alert("Connexion réussie !")
    }
  }
}
    return (
       
  <div className="connexion-container">
    <div className="connexion-box">
      <h1>{mode === "connexion" ? "Se connecter" : "S'inscrire"}</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={motDePasse}
        onChange={(e) => setMotDePasse(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {mode === "connexion" ? "Se connecter" : "S'inscrire"}
      </button>

      <p onClick={() => setMode(mode === "connexion" ? "inscription" : "connexion")}>
        {mode === "connexion" ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
      </p>

    </div>
  </div>
);
    
}
export default Connexion