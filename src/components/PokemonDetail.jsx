import React from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

function PokemonDetail({ pokemonList }) {
  const { id } = useParams();
  const pokemon = pokemonList.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <p>Pokemon not found</p>;
  }

  return (
    <div className="pokemon-detail">
      <Link to="/">Back to List</Link>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
    </div>
  );
}

export default PokemonDetail;
