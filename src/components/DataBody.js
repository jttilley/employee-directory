import React from "react";
import "../styles/DataBody.css";

function DataBody({key, pic, name, email, phone, dob}) {
   return (
    <tr id={key}>
      <td><img src={pic} /></td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{dob}</td>
    </tr>
  );
}

export default DataBody;