import React from "react";
import Card from "./card-component";
import "./cardcontainer.css";

function Blog() {
  return (
    <div>
      <div className="cardcontainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Blog;
