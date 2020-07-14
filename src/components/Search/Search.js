import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [input, setInput] = useState("");

  function handleInput(input) {
    props.setCounter(input);
    setInput("");
  }

  function handleChange(value) {
    setInput(value);
  }

  return (
    <div className="search-container">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          value={input}
          className="search-box"
          placeholder="Enter the Pokémon Name or Number here..."
          type="text"
          onChange={(event) => handleChange(event.target.value)}
        />
        <button
          type="submit"
          className="submit-button"
          onClick={() => handleInput(input)}
        >
          Search
        </button>
      </form>
    </div>
  );
}
