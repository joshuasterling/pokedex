import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Pokemon from "./components/Pokemon/Pokemon";
import Pokedex from "./components/Pokedex/Pokedex";
import Search from "./components/Search/Search";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [counter, setCounter] = useState(Math.floor(Math.random() * 151) + 1);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}`).then((res) => {
      setPokemon(res.data);
    });
  }, [counter]);

  function goToPrevPokemon() {
    setCounter(counter - 1);
  }

  function goToNextPokemon() {
    setCounter(counter + 1);
  }

  console.log(counter);
  return (
    <div className="app-container">
      <Header />

      {/* Background Image */}
      <img className="background-image" src={"field.png"} alt="background" />

      {/* Pokédex Image */}
      <img className="pokedex" src={"/new-pokedex.png"} alt="pokedex" />

      <Pokemon
        pokemon={pokemon}
        counter={counter}
        goToNextPokemon={goToNextPokemon}
        goToPrevPokemon={goToPrevPokemon}
      />

      <Pokedex pokemon={pokemon} />
      <Search setCounter={setCounter} />
    </div>
  );
}

export default App;
