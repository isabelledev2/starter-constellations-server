import React from "react";
import "./App.css";



function App() {
  const xStyle = {
    color: "black",
    fontFamily: 'cursive',
    textAlign: "center",
  };
  const yStyle = {
    color: "black",
    fontFamily: "monospace",
    textAlign: "center",
  };
  
  
  return (
    <div>
      <h1 style={xStyle}>Hello!</h1>
      <h4 style={yStyle}>How are you?</h4>
      <h5 style={xStyle} className="App-weather-message">Today is a nice day!</h5>
    </div>
  );
}

export default App;
