import React from "react";
import "../styles/DataTable.css";

function DataTable({children}) {
  return (
    <table {...children} />
  );
}

export default DataTable;