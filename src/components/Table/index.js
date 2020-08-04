import React from "react";
import Employee from "../Employee/index"

function Table(props) {

    return (
        <table className="table table-striped">
            <thead className="thead">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                    {props.directory.map(person => <Employee
                    f_name={person.first_name}
                    l_name={person.last_name}
                    department={person.department}/>)}
 
            </tbody>
        </table>
    )
}

export default Table;