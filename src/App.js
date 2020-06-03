import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(pokemon, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Search />
      <div className="pokedex-container">
        <img className="something" src={"/pokedex.jpg"} alt="pokedex" />
      </div>
    </div>
  );
}

export default App;
