import React from "react";

const EmployeeContext = React.createContext({
  users: [],
  search: "",
  handleInputChange: () => {},
  handleFormSubmit: () => {},
});

export default EmployeeContext;