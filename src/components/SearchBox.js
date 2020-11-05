import React from "react";
import "../styles/SearchBox.css";

function Search(props) {
  return (
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  );
}

export default Search;
