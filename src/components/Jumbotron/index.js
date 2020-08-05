import React from "react";
import Search from "../Search/index"
import "./style.css";


export default  function Jumbotron( {findEmployee, sort} ) {


    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Use the search box to search!</p>
            <hr className="my-4"/>
            <div className="text-center">
            <Search findEmployee={findEmployee}/>
            <button onClick={sort}>Sort</button>
            </div>
    
        </div>
    )
}



