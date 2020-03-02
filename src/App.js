import React from "react";
import "./App.css";
import Hero from "./hero-component";
import Card from "./card-component";
import "tachyons";
import Blog from "./cardcontainer";

function App() {
  return (
    <div>
      <Hero />
      <Blog />
    </div>
  );
}

export default App;
