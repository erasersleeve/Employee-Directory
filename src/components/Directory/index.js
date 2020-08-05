import React, { Component } from "react";
import { render } from "@testing-library/react";
const directory = require("../../directory.json");

function Directory ({users}) {
    return (
        <div className="container text-center">
            <table style={{width:"100%"}}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                </tr>
                {users.map(person => {
                    return (
                        <tr>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.department}</td>
                        </tr>
                        )
                })}
            </table>
        </div>
    );
}
    
export default Directory;