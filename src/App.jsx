import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWorkData from "./Components/MyWork/MyWorkData";
import Contact from "./Components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="mywork">
        <MyWorkData />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
