import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import DataBody from "./components/DataBody";
import API from "./utils/API";
import { Table } from "reactstrap";
import moment from "moment";
import EmployeeContext from "./utils/Employee";

let mainList = []; //global var for mainList list 

function App() {
  const [employeesState, setEmployeesState] = useState({
    employees: [],
    search: ""
  })

  const { employees, search } = employeesState;
  
  useEffect(() => {
    initEmployees();
  },[]);

  //initialize the main List of employees
  const initEmployees = async () => {
    try {
      const res = await API.getEmployees();
      // console.log("getEmployees -> res.data.results", res.data.results);
      mainList = res.data.results;
      console.log('mainList: ', mainList);
      setEmployeesState({...employeesState, employees: mainList});  
    } catch (error) {
      console.log("There was an error processing your results.");
    }
  };

  // filter list by search
  const searchEmployees = (value) => {
    const filtered = mainList.filter(emp => {
      const str = `${emp.name.first} ${emp.name.last}
      ${emp.phone}
      ${emp.email}
      ${moment(emp.dob.date).format('MM/DD/YYYY')}`
      return str.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    setEmployeesState({...employeesState, search: value, employees: filtered});
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
        sorted = employees.sort(sortNames);
        break;
      case "Phone":
        sorted = employees.sort(sortPhones);
        break;
      case "Email":
        sorted = employees.sort(sortEmails);
        break;
      case "Date of Birth":
        sorted = employees.sort(sortDOBs);
        break;
    }

    // console.log('sorted: ', sorted);
    setEmployeesState({...employeesState, employees: sorted});
  }

  return (
    <EmployeeContext.Provider
      value={{
        search,
        employees,
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
              <th onClick={handleClickSort}>Name</th>
              <th onClick={handleClickSort}>Phone</th>
              <th onClick={handleClickSort}>Email</th>
              <th onClick={handleClickSort}>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <DataBody 
                key={emp.cell}
                pic={emp.picture.thumbnail}
                name={`${emp.name.first} ${emp.name.last}`}
                phone={emp.phone}
                email={emp.email}
                dob={moment(emp.dob.date).format('MM/DD/YYYY')}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;