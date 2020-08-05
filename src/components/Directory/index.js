import React, { Component } from "react";
import "./style.css";
import { render } from "@testing-library/react";
const directory = require("../../directory.json");

function Directory ({users, sort}) {
    return (
        <>
        {/* <div className="text-center">
            <button className="btn" onClick={sort}>Sort Employees</button>
        </div> */}
        <div className="container text-center">
            <table style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th className="text-center"> 
                            <button className="btn" onClick={sort}>Sort Employees</button>
                        </th>
                    </tr>
                </thead>
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
        </>
    );
}
    
export default Directory;