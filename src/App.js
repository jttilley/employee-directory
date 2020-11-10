import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import DataBody from "./components/DataBody";
import API from "./utils/API";
import { Table } from "reactstrap";
import moment from "moment";
import EmployeeContext from "./utils/Employee";

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

  //initialize the employees list
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

  // filter list by search
  const searchEmployees = (value) => {
    const filtered = employees.filter(emp => {
      const str = `${emp.name.first} ${emp.name.last}
      ${emp.phone}
      ${emp.email}
      ${moment(emp.dob.date).format('MM/DD/YYYY')}`
      return str.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    setUsersState({...usersState, search: value, users: filtered});
  }

  // search while typing
  const handleInputChange = (event) => {
    const {value} = event.target
    searchEmployees(value);
  };

  //sort by names
  function sortNames( a, b ) {
    if ( a.name.first < b.name.first ){
      return -1;
    }
    if ( a.name.first > b.name.first ){
      return 1;
    }
    return 0;
  }
  
  //sort by phone numbers
  function sortPhones( a, b ) {
    if ( a.phone < b.phone ){
      return -1;
    }
    if ( a.phone > b.phone ){
      return 1;
    }
    return 0;
  }
  
  // sort by emails
  function sortEmails( a, b ) {
    if ( a.email < b.email ){
      return -1;
    }
    if ( a.email > b.email ){
      return 1;
    }
    return 0;
  }

  // sort by birthdays
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

    //choose sorting function based on what was clicked
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