import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import PokemonDetailModal from "./components/PokemonDetailModal";
import SearchBar from "./components/SearchBar";
import "./App.css";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map((p) => axios.get(p.url))
        );

        const detailedPokemon = pokemonDetails.map((res) => ({
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites.front_default,
          base_experience: res.data.base_experience,
          height: res.data.height,
          weight: res.data.weight,
        }));

        setPokemon(detailedPokemon);
        setLoading(false); // Finish loading
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="pokemon-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredPokemon.map((p) => (
            <PokemonCard key={p.id} pokemon={p} openModal={openModal} />
          ))
        )}
      </div>
      {selectedPokemon && (
        <PokemonDetailModal
          pokemon={selectedPokemon}
          closeModal={closeModal}
        />  
      )}
    </div>
  );
}

export default App;
