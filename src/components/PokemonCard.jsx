import React from "react";
import "../App.css";

function PokemonCard({ pokemon, openModal }) {
  return (
    <div className="pokemon-card" onClick={() => openModal(pokemon)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
}

export default PokemonCard;
