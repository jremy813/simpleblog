import React from "react";
import "./card-component.css";

function Card() {
  return (
    <div className="blogcontainer br1 ba  pa3 ma1 black grow">
      <div className="card">
        <h1>Blog Title</h1>
        <span>Category</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          explicabo culpa, odio sequi totam iste ipsam numquam quidem minima id!
        </p>
      </div>
    </div>
  );
}

export default Card;
