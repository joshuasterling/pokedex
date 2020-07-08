import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search-container">
      <input
        className="search-box"
        placeholder="Search the Pokémon Name or Number here..."
        type="text"
      ></input>
    </div>
  );
}
