import React from "react";
import ReactDOM from "react-dom";

/*const age = 25;

ReactDOM.render(
  <div>
        <h1>hello my age is {age} or { Math.floor(Math.random() * 10)}</h1>
    <ul>
      <li>tomato</li>
      <li>tomato</li>
      <li>tomato</li>
    </ul>

    <h1>hello my age is {`${age}`} </h1>

  
  </div>,
  document.getElementById("root")
);*/
//------------------------------------------
const myName = "mohammad";

const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(currentDate);

ReactDOM.render(
  <div>
    <p>created by {myName}</p>
    <p>copy right {year}</p>
  </div>,
  document.getElementById("root")
);
