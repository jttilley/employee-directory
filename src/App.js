import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
// import DataTable from "./components/DataTable";
// import DataBody from "./components/DataBody";
// import Wrapper from "./components/Wrapper";
import API from "./utils/API";
import { Table } from "reactstrap";
import moment from "moment";

import EmployeeContext from "./utils/Employee";
import DataBody from "./components/DataBody";

let employees = []; //global var for employees list 

function App() {
  const [usersState, setUsersState] = useState({
    users: [],
    search: ""
  })

  const { users, search } = usersState;

  
  useEffect(() => {
    initEmployees();
  }, []);

  const initEmployees = async () => {
    try {
      const res = await API.getUsers();
      // console.log("getEmployees -> res.data.results", res.data.results);
      employees = res.data.results;
      console.log('employees: ', employees);
      setUsersState({...usersState, users: employees});  
    } catch (error) {
      console.log("There was an error processing your results.");
    }
  };

  const findEmployee = () => {

  }
  

  
  const searchEmployees = (query) => {

  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setUsersState({...usersState, search:value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchEmployees(search);
  };

  function sortNames( a, b ) {
    if ( a.name.first < b.name.first ){
      return -1;
    }
    if ( a.name.first > b.name.first ){
      return 1;
    }
    return 0;
  }
  
  function sortPhones( a, b ) {
    if ( a.phone < b.phone ){
      return -1;
    }
    if ( a.phone > b.phone ){
      return 1;
    }
    return 0;
  }
  
  function sortEmails( a, b ) {
    if ( a.email < b.email ){
      return -1;
    }
    if ( a.email > b.email ){
      return 1;
    }
    return 0;
  }

  function sortDOBs( a, b ) {
    if ( a.dob.date < b.dob.date ){
      return -1;
    }
    if ( a.dob.date > b.dob.date ){
      return 1;
    }
    return 0;
  }

  const handleClickSort = (event) => {
    // console.log('handleClickSort event: ', event);
    let sorted = []

    switch(event.target.innerText) {
      case "Name":
        sorted = users.sort(sortNames);
        break;
      case "Phone":
        sorted = users.sort(sortPhones);
        break;
      case "Email":
        sorted = users.sort(sortEmails);
        break;
      case "Date of Birth":
        sorted = users.sort(sortDOBs);
        break;
    }

    // console.log('sorted: ', sorted);
    setUsersState({...usersState, users: sorted});
  }

  return (
    <EmployeeContext.Provider
      value={{
        search,
        users,
        handleInputChange,
        handleFormSubmit,
      }}
    >

      <div>
        <Header />
        <Nav />
        <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th id="name" onClick={handleClickSort}>Name</th>
              <th onClick={handleClickSort}>Phone</th>
              <th onClick={handleClickSort}>Email</th>
              <th onClick={handleClickSort}>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <DataBody 
                key={user.cell}
                pic={user.picture.thumbnail}
                name={`${user.name.first} ${user.name.last}`}
                phone={user.phone}
                email={user.email}
                dob={moment(user.dob.date).format('MM/DD/YYYY')}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;