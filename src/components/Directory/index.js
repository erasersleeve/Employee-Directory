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
        <div className="text-center table-responsive">
         
            <button className="btn" onClick={sort}>Sort Employees</button>
                        
            <table className="table">
                <thead>
                    
                    <tr>
                        <th style={{width:"33%"}}>First Name</th>
                        <th style={{width:"33%"}}>Last Name</th>
                        <th style={{width:"33%"}}>Department</th>
                    </tr>
                        
                </thead>
                <tbody>
                {users.map(person => {
                    return (
                
                        <tr>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.department}</td>
                        </tr>
                        )
                })}
                </tbody>
            </table>
        </div>
        </>
    );
}
    
export default Directory;