import React from "react";
import "./Pokedex.css";

export default function Pokedex({ pokemon }) {
  let pokemonName = pokemon.name;

  if (pokemonName) pokemonName = pokemonName.toUpperCase();

  return (
    <div className="pokedex-container">
      <ul>
        <li>Pokémon Name: {pokemonName}</li>
        <li>Order #: {pokemon.order}</li>
        <li>
          Health Points: {pokemon.stats ? pokemon.stats[0].base_stat : null}
        </li>
        <li>Attack: {pokemon.stats ? pokemon.stats[1].base_stat : null}</li>
        <li>Defense: {pokemon.stats ? pokemon.stats[2].base_stat : null}</li>
        <li>
          Special-Attack: {pokemon.stats ? pokemon.stats[3].base_stat : null}
        </li>
        <li>
          Special-Defense: {pokemon.stats ? pokemon.stats[4].base_stat : null}
        </li>
        <li>Speed: {pokemon.stats ? pokemon.stats[5].base_stat : null}</li>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
      </ul>
      <div className="abilities-button">Abilities</div>
      {/* <img
        className="pokemon"
        style={{ width: "200px", height: "200px" }}
        src={pokemon.sprites ? pokemon.sprites.back_default : null}
        alt="pokemon"
      />
      <img
        className="pokemon"
        style={{ width: "200px", height: "200px" }}
        src={pokemon.sprites ? pokemon.sprites.front_shiny : null}
        alt="pokemon"
      />
      <img
        className="pokemon"
        style={{ width: "200px", height: "200px" }}
        src={pokemon.sprites ? pokemon.sprites.back_shiny : null}
        alt="pokemon"
      /> */}
    </div>
  );
}
