import React from "react";
import PokemonType from "../shared/PokemonType";

const styles = {
  cardWrapper: {
    width: "270px",
    hight: "500px",
    boxShadow: "10px 10px 10px grey",
    margin: "15px"
  },
  image: {
    height: "270px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px"
  },
  pokemonInfo: { padding: 15 }
};
const PokemonCard = ({ item, typesList }) => {
  console.log("=================render card lai ne");
  const { ThumbnailImage, number, type, name } = item;
  return (
    <div style={styles.cardWrapper}>
      <img style={styles.image} src={ThumbnailImage} alt="pokemon-img" />
      <div style={styles.pokemonInfo}>
        <p>#{number}</p>
        <h2>{name}</h2>
        <PokemonType type={type} typesList={typesList} />
      </div>
    </div>
  );
};

export default PokemonCard;
