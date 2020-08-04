import React, { useState } from "react";
import Directory from "./components/Directory/index";
import Navbar from "./components/Navbar/index";
import './App.css';

function App() {
  // const [list, setlist] = useState(directory);
  
  return (
    <>
    <Navbar />
    <Directory />
      </>
  );
}

export default App;