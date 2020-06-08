import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Pokemon from "./components/Pokemon/Pokemon";
import Pokedex from "./components/Pokedex/Pokedex";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [counter, setCounter] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(`${currentPageUrl}${counter}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPokemon(res.data);
      });
    return () => cancel();
  }, [counter]);

  function goToPrevPokemon() {
    setCounter(counter - 1);
  }

  function goToNextPokemon() {
    setCounter(counter + 1);
  }

  if (loading) return "Loading...";

  console.log(pokemon);
  // console.log(pokemon.moves ? pokemon.sprites.front_default : null);

  return (
    <div className="app-container">
      <Header />
      <img className="pokedex" src={"/pokedex.jpg"} alt="pokedex" />
      <Pokemon
        pokemon={pokemon}
        counter={counter}
        goToNextPokemon={goToNextPokemon}
        goToPrevPokemon={goToPrevPokemon}
      />
      <Pokedex pokemon={pokemon} />
      <Search
        counter={counter}
        goToPrevPokemon={goToPrevPokemon}
        goToNextPokemon={goToNextPokemon}
      />
    </div>
  );
}

export default App;
