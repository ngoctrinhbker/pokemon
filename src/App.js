import React from "react";
import "antd/dist/antd.css";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App" style={{ width: "80%", margin: "100px auto" }}>
      <PokemonList />
    </div>
  );
}

export default App;
