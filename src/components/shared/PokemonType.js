import React from "react";
import { Tag } from "antd";
import uniqueId from "lodash/fp/uniqueId";

const mappingColor = type => {
  let color;
  switch (type) {
    case "grass":
      color = "#00cc00";
      break;
    case "poison":
      color = "#ff80ff";
      break;
    case "flying":
      color = "#66b3ff";
      break;
    case "electric":
      color = "#e6e600";
      break;
    case "normal":
      color = "#d1e0e0";
      break;
    case "fire":
      color = "#ff8080";
      break;
    case "water":
      color = "#99ddff";
      break;
    case "bug":
      color = "#bf80ff";
      break;
    case "dark":
      color = "#00004d";
      break;
    case "psychic":
      color = "#ff80ff";
      break;
    case "ground":
      color = "#66b3ff";
      break;
    case "ice":
      color = "#1a53ff";
      break;
    case "steel":
      color = "#66cc00";
      break;
    default:
      color = "#e0e0eb";
  }
  return color;
};

const PokemonType = ({ type }) => {
  return type.map(typeName => (
    <Tag key={uniqueId("pokemon_type_")} color={mappingColor(typeName)}>
      {typeName}
    </Tag>
  ));
};

export default PokemonType;
