import React, {useContext} from "react";
import "../styles/SearchBox.css";
import EmployeeContext from "../utils/Employee";

function SearchBox() {
  const {search, handleFormSubmit, handleInputChange} = useContext(EmployeeContext);

  return (
    <form className="form-inline">
      <input 
        className="form-control mr-sm-2" 
        name="search"
        type="search" 
        placeholder="Find Employee"
        aria-label="Search" 
        value={search}
        id="search"
        onChange={handleInputChange}
      />
      <br />
        <button onClick={handleFormSubmit}>Search</button>
    </form>
  );
}

export default SearchBox;
