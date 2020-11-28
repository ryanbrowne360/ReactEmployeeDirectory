import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import GetEmployees  from "./GetEmployees"

function App() {
  return (
  
      <div>
    <Header />
    <GetEmployees />
      </div>
   
  );
}

export default App;

