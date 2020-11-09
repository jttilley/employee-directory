import React, {useState, useEffect} from "react";
// import Main from "./components/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
// import DataTable from "./components/DataTable";
// import DataBody from "./components/DataBody";
// import DataArea from "./components/DataArea";
// import Wrapper from "./components/Wrapper";
import API from "./utils/API"
// import EmployeeContext from "./utils/globalState";

function App() {
  const [usersState, setUsersState] = useState({
    users: [
      {
        cell: "0770-545-265",
      dob: {date: "1992-06-25T04:14:45.869Z", age: 28},
      email: "judy.crawford@example.com",
      gender: "female",
      id: {name: "NINO", value: "ZM 08 31 88 S"},
      login: {uuid: "720e1fab-8eda-4e04-9d1d-28e10a46bb6b", username: "smallcat580", password: "awful", salt: "4ZP6drgZ", md5: "f8b5ce6997c2ae75ea3d46aacdfc4601"},
      name: {title: "Miss", first: "Judy", last: "Crawford"},
      nat: "GB",
      phone: "015394 77868",
      picture: {large: "https://randomuser.me/api/portraits/women/3.jpg", medium: "https://randomuser.me/api/portraits/med/women/3.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg"},
      registered: {date: "2003-08-10T14:03:08.171Z", age: 17}
    },{
      cell: "(280)-843-5237",
      dob: {date: "1951-10-11T02:34:33.746Z", age: 69},
      email: "terry.dixon@example.com",
      gender: "male",
      id: {name: "SSN", value: "454-01-3092"},
      login: {uuid: "cd152ea8-cdd8-4a8f-920c-cfd0c8928407", username: "beautifulswan869", password: "testing1", salt: "KLmUctF1", md5: "399b634b5d8d3c5f76130d2ab09cdcc9"},
      name: {title: "Mr", first: "Terry", last: "Dixon"},
      nat: "US",
      phone: "(420)-967-9934",
      picture: {large: "https://randomuser.me/api/portraits/men/86.jpg", medium: "https://randomuser.me/api/portraits/med/men/86.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg"},
      registered: {date: "2016-07-27T22:11:34.242Z", age: 4}
    }
    ],
    search: ""
  })

  const { users, search } = usersState;

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    try {
      const res = await API.getUsers();
      console.log("getEmployees -> res", res.data);
      setUsersState(users = res.data.results);
      console.log('res.data: ', res.data.results);
      console.log('users: ', users);
    } catch (error) {
      console.log("There was an error processing your results.");
    }
  };

  // const searchEmployees = (query) => {

  // }

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setSearch(value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   searchEmployees(search);
  // };

  return (
    // <EmployeeContext.Provider
    //   value={{
    //     search,
    //     users,
    //     handleInputChange,
    //     handleFormSubmit,
    //   }}
    // >

      <div>
        <Header />
        <Nav />
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
          </tr>
          {users.map(user => (
            <tr key={user.id.value}>
              <td><img src={user.picture.thumbnail} /></td>
              <td>{user.name.first} {user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob.date}</td>
            </tr>
          ))}
        </table>
      </div>
    // </EmployeeContext.Provider>
  );
}

export default App;