import React from "react";

const EmployeeContext = React.createContext({
  employees: [],
  search: "",
  handleInputChange: () => {},
});

export default EmployeeContext;