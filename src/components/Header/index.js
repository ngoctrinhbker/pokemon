import React from "react";
import { Input } from "antd";

const { Search } = Input;
const styles = {
  headerWrapper: {
    color: "white",
    padding: 30,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#616161"
  },
  hintText: {
    padding: 15,
    backgroundColor: "#55bf47",
    borderRadius: 5,
    fontSize: 20,
    width: "50%"
  }
};

const Header = ({ handleSearch }) => {
  return (
    <div style={styles.headerWrapper}>
      <div>
        <h2 style={{ color: "white" }}>Name or Number</h2>
        <Search
          id="search_pokemon"
          allowClear
          placeholder="Enter pokemon's name or number "
          enterButton
          size="large"
          style={{ width: 400, margin: "0 10px 10px 0", color: "orange" }}
          onSearch={value => {
            handleSearch(value);
          }}
        />
        <p>
          Use this Advanded Search to explore more Pokemon by Type, Weakness,...
        </p>
      </div>
      <div style={styles.hintText}>
        Search for a Pokemon by Name or Using it's National Pokemon number{" "}
      </div>
    </div>
  );
};

export default Header;
