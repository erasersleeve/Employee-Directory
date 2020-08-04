import React from "react";
import "./style.css";

function Employee(props) {
  return (
    <tr>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.department}</td>
    </tr>
  );
}

export default Employee;
