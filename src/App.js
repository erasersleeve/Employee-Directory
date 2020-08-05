import React, { useState } from "react";
import Directory from "./components/Directory/index";
import Jumbotron from "./components/Jumbotron/index";
import Search from "./components/Search/index";
import directoryJSON from "./directory.json";
import './App.css';

function App() {

  //if there is only one key value can write like this:
  // const [all, setAll] = useState(directoryJSON);
  //setAll is never called, so it is redundant. Could Just use filtered and directoryJSON to represent All (line 31).
  const [all, setAll] = useState({
    all: directoryJSON,
  });

  const [filtered, setFiltered] = useState({
    filtered: directoryJSON,
  });

  const [sorted, setSorted] = useState({
    sorted: "unordered"
  })
  

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
  
  const sort = () => {
    console.log(sorted);
    if (sorted.sorted=="unordered" || sorted.sorted=="descending") {
      console.log(filtered.filtered);
      const results = filtered.filtered.sort(
        //metric, i.e. something to measure
        function(a, b){
          var x = a.first_name.toLowerCase();
          var y = b.first_name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        }); 
      setSorted({
        sorted:"ascending"
      })
      setFiltered({
        filtered: results
      }) 
    } else {
      const results = filtered.filtered.sort(
        //metric, i.e. something to measure
        function(a, b){
          var x = a.first_name.toLowerCase();
          var y = b.first_name.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        })
      setSorted({
        sorted:"descending"
      })
      setFiltered({
        filtered: results
      }) 
    }

  }
  
  return (
    <>
      {/* <Jumbotron/> */}
      <Jumbotron findEmployee={findEmployee}/>
      <Directory users={filtered.filtered}  sort={sort}/>
    </>
  );
}

export default App;