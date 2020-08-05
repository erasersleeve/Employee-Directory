import React from "react";
import ReactDOM from "react-dom";


export default function Search( {findEmployee} ) {
     


    // const [searchTerm, setSearchTerm] = React.useState("");
    // const handleSearch = event => {
    //     event.preventDefault();
    //     setSearchTerm(event.target.value);
    //     console.log(event.target.value);
    //   };
      
    




     return (
          <section className="cell containter">
               <input type="text" className="input col-2 text-center" placeholder="Enter a First Name!" onChange={findEmployee}/>
               <br></br>
               <button className="btn my-2 my-sm-0" type="submit">Search</button>
          </section>
     );
}