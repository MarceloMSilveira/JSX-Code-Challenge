//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
const foods = ["bacon", "noodles", "french fries"];

const result = (
  <div>
    <h1>MY FAVOURITE FOODS:</h1>
    <ul>
      <li>{foods[0]}</li>
      <li>{foods[1]}</li>
      <li>{foods[2]}</li>
    </ul>
  </div>
);
//It should contain 3 list elements.
ReactDOM.render(result, document.getElementById("root"));
