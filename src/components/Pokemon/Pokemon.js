import React from "react";
import "./Pokemon.css";

export default function Pokemon({
  pokemon,
  counter,
  goToNextPokemon,
  goToPrevPokemon,
}) {
  let pokemonName = pokemon.name;

  if (pokemonName) pokemonName = pokemonName.toUpperCase();

  return (
    <div className="pokemon-container">
      <img
        className="pokemon"
        style={{ width: "200px", height: "200px" }}
        src={pokemon.sprites ? pokemon.sprites.front_default : null}
        alt="pokemon"
      />
      <div className="pokemon-name">{pokemonName}</div>

      {counter >= 2 && (
        <button
          className="previous-button"
          onClick={() => {
            goToPrevPokemon();
          }}
        >
          PREVIOUS
        </button>
      )}

      {counter <= 150 && (
        <button
          className="next-button"
          onClick={() => {
            goToNextPokemon();
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
}
