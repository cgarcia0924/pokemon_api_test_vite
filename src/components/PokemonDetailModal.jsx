import React from "react";
import Modal from "react-modal";
import "../App.css";

// Required for accessibility; bind modal to the root of your app
Modal.setAppElement("#root");

function PokemonDetailModal({ pokemon, closeModal }) {
  return (
    <Modal
      isOpen={true} // Modal should always be open when this component is rendered
      onRequestClose={closeModal} // Close modal on outside click or ESC key
      contentLabel="Pokemon Details"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="pokemon-detail">
        <button onClick={closeModal} className="close-button">X</button>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
      </div>
    </Modal>
  );
}

export default PokemonDetailModal;
