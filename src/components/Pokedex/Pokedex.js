import React from "react";
import "./Pokedex.css";

export default function Pokedex({ pokemon }) {
  let pokemonName = pokemon.name;

  if (pokemonName) pokemonName = pokemonName.toUpperCase();

  return (
    <div className="pokedex-container">
      <p>Pokémon Name: {pokemonName}</p>
      <br />
      <p>Order #: {pokemon.order}</p>
      <br />
      <p>Health Points: {pokemon.stats ? pokemon.stats[0].base_stat : null}</p>
      <br />
      <p>Attack: {pokemon.stats ? pokemon.stats[1].base_stat : null}</p>
      <br />
      <p>Defense: {pokemon.stats ? pokemon.stats[2].base_stat : null}</p>
      <br />
      <p>Special-Attack: {pokemon.stats ? pokemon.stats[3].base_stat : null}</p>
      <br />
      <p>
        Special-Defense: {pokemon.stats ? pokemon.stats[4].base_stat : null}
      </p>
      <br />
      <p>Speed: {pokemon.stats ? pokemon.stats[5].base_stat : null}</p>
      <br />
      <p>Height: {pokemon.height}</p>
      <br />
      <p>Weight: {pokemon.weight}</p>
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
