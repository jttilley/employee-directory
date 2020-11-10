import React from "react";

const EmployeeContext = React.createContext({
  users: [],
  search: "",
  handleInputChange: () => {},
});

export default EmployeeContext;