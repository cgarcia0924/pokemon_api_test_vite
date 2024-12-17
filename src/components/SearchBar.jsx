import React from "react";
import "../App.css";

function SearchBar({ setSearchQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
