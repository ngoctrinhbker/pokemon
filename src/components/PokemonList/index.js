import React, { useEffect, useState } from "react";
import { Spin, Button } from "antd";
import PokemonCard from "../PokemonCard";
import Header from "../Header";
import uniqueId from "lodash/fp/uniqueId";

import { proxyurl, getPokemonListApi, itemPerLoading } from "../constants";

const styles = {
  listCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "20px 0"
  },
  buttonLoadMore: { margin: "50px 40%", width: "100%" }
};

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [displayedItem, setDisplayedItem] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetch(proxyurl + getPokemonListApi)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
        setIsloading(false);
      })
      .catch(error => setError(error));
  }, []);

  useEffect(() => {
    setDisplayedItem(currentIndex * itemPerLoading);
  }, [currentIndex]);

  const onClickLoadMore = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSearch = word => {
    setIsSearching(true);
    if (pokemonData) {
      if (word) {
        setFilteredItems(
          pokemonData.filter(item =>
            JSON.stringify(item)
              .toLowerCase()
              .includes(word.toLowerCase())
          )
        );
      } else {
        setIsSearching(false);
      }
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div style={styles.listCard}>
        {error && <p>Errors when loading data</p>}
        {isloading && <Spin size="large" />}
        {isSearching &&
          (filteredItems.length > 0 ? (
            <>
              <h3 style={{ width: "100%" }}>
                There are {filteredItems.length} results match to your search!
              </h3>
              {filteredItems.map((item, key) => (
                <PokemonCard
                  key={uniqueId("filtered_pokemon_")}
                  item={item}
                ></PokemonCard>
              ))}
            </>
          ) : (
            <p style={{ color: "blue" }}>No Pokemon match to your search</p>
          ))}
        {pokemonData && !isSearching && (
          <>
            {pokemonData.slice(0, displayedItem).map(item => (
              <PokemonCard key={uniqueId("pokemon_")} item={item}></PokemonCard>
            ))}
            <Button
              type="primary"
              size="large"
              onClick={onClickLoadMore}
              style={styles.buttonLoadMore}
            >
              Load more Pokemon
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default PokemonList;
