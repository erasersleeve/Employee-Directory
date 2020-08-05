import React, { useState } from "react";
import Directory from "./components/Directory/index";
import Jumbotron from "./components/Jumbotron/index";
import Search from "./components/Search/index";
import directoryJSON from "./directory.json";
import './App.css';

function App() {
  const [all, setAll] = useState({
    all: directoryJSON,
  });

  const [filtered, setFiltered] = useState({
    filtered: directoryJSON,
  });
  

  const findEmployee = event => {
    console.log("---------------------------");
    console.log(filtered);
    console.log(all);
    const result = all.all.filter( (x)=> x["first_name"].toLowerCase().includes((event.target.value).toLowerCase()))
    setFiltered({
      filtered: result
    })
    // console.log(filtered);
  }
  
  // keep a value filter in your component state and use that to see if it is contained as a substring in any of the array element properties.

  
  return (
    <>
      {/* <Jumbotron/> */}
      <Jumbotron findEmployee={findEmployee}/>
      <Directory users={filtered.filtered}/>
    </>
  );
}

export default App;