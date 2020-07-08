import React, { useState } from "react";
import "./Pokedex.css";

export default function Pokedex({ pokemon }) {
  const [screen, setScreen] = useState("stats");

  if (screen === "stats") {
    return (
      <div className="pokedex-container">
        <h2>STATS</h2>
        <ul>
          <li>
            Pokémon Name: {pokemon.name ? pokemon.name.toUpperCase() : null}
          </li>
          <li>
            Type:{" "}
            {pokemon.types ? pokemon.types[0].type.name.toUpperCase() : null}
          </li>
          <li>Number: {pokemon.id}</li>
          <li>
            Health Points: {pokemon.stats ? pokemon.stats[0].base_stat : null}
          </li>
          <li>Attack: {pokemon.stats ? pokemon.stats[1].base_stat : null}</li>
          <li>Defense: {pokemon.stats ? pokemon.stats[2].base_stat : null}</li>
          <li>Speed: {pokemon.stats ? pokemon.stats[5].base_stat : null}</li>
          <li>Height: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
        </ul>
        <div className="abilities-button">
          <button
            className="button"
            onClick={() => {
              setScreen("abilities");
            }}
          >
            ABILITIES
          </button>
        </div>
      </div>
    );
  } else if (screen === "abilities") {
    return (
      <div className="pokedex-container">
        <h2>ABILITIES</h2>
        <ul>
          <li>
            Ability #1:{" "}
            {pokemon.abilities
              ? pokemon.abilities[0].ability.name.toUpperCase()
              : null}
          </li>
          <li>
            Ability #2:{" "}
            {pokemon.abilities[1]
              ? pokemon.abilities[1].ability.name.toUpperCase()
              : "None"}
          </li>
        </ul>
        <div className="abilities-button">
          <button
            className="button"
            onClick={() => {
              setScreen("stats");
            }}
          >
            STATS
          </button>
        </div>
      </div>
    );
  }
}
