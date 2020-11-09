import React from "react";
import "../styles/Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>Click on a column labels to sort or use the search to narrow your results.</p>
    </div>
  )
}

export default Header;