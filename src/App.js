import React from "react";
import './App.css'
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Navbar from "./components/NavBar";


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
