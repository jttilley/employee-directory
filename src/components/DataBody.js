import React from "react";
import "../styles/DataBody.css";
import EmployeeContext from "../utils/globalState"

function DataBody(props) {
  // return (
    // <EmployeeContext.Consumer >
    //   {({ users }) => (
    //     {users.length ? (
    //       <div>
    //         {users.map(user => (
    //         <tr>
    //           <th>
    //             <img src={user.picture.thumbnail} />
    //           </th>
    //           <th>{user.name.first + " " + user.name.last}</th>
    //           <th>{user.phone}</th>
    //           <th>{user.email}</th>
    //           <th>{user.dob.date.match(/\d{4}-\d{2}-\d{2}/)}</th>
    //         </tr>
    //         ))}
    //       </div>
    //       ) : (
    //         <span>No Data to display</span>
    //       )
    //     }
    //   )}
    // </EmployeeContext.Consumer >
  // );
}

export default DataBody;