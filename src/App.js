import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1").then((res) => {
      setPokemon(res.data);
    });
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   let cancel;
  //   axios
  //     .get(pokemon, {
  //       cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //     })
  //     .then((res) => {
  //       setLoading(false);
  //       setPokemon(res.data.results.map((p) => p.name));
  //     });

  //   return () => cancel();
  // }, []);

  console.log(pokemon);
  console.log(pokemon.moves ? pokemon.sprites.front_default : null);
  return (
    <div className="app-container">
      <Header />
      <Search />
      <div className="pokedex-container">
        <img className="something" src={"/pokedex.jpg"} alt="pokedex" />
      </div>
      {pokemon.name}
      <br />
      {pokemon.order}
      <br />
      {pokemon.weight}
      <br />
      {pokemon.height}
      <br />
      <img
        className="pokemon"
        style={{ width: "300px", height: "300px" }}
        src={pokemon.moves ? pokemon.sprites.front_default : null}
        alt="pokemon"
      />
      {/* {pokemon.abilities} */}
      {/* {pokemon.abilities[0]} */}
      {/* {pokemon.species.name} */}
      {/* {pokemon.stats.base_stat} */}
      {/* <img src={pokemon.sprites.back_default} alt="current pokemon" /> */}
    </div>
  );
}

export default App;
