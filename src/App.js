import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
     <Experience />


       <Contact />
    </div>
  );
}

export default App;
