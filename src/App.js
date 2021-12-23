import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";

import { BrowserRouter as Router ,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
