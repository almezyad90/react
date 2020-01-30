import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
/*const age = 25;

ReactDOM.render(
  <div>
    <h1>
      hello my age is {age} or {Math.floor(Math.random() * 10)}
    </h1>
    <ul>
      <li>tomato</li>
      <li>tomato</li>
      <li>tomato</li>
    </ul>

    <h1>hello my age is {`${age}`} </h1>
  </div>,
  document.getElementById("root")
);
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
//-----------------------------
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="style">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        alt="bb"
        src="https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg"
      />
      <img
        alt="bb"
        src="https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492__340.jpg"
      />
      <img
        alt="bb"
        src="https://images.squarespace-cdn.com/content/v1/599eedbe579fb3de5286175d/1576331365183-XDJ8VRDG31A9J3EZ7CDV/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/Stop+Wallpaper+Laptop+%26+Tablet+%28UHD%29+%283840+x+2160%29.jpg"
      />

      <img alt="bb" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
//------------------------------------

const costumStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
costumStyle.color = "blue";
ReactDOM.render(
  <h1 style={costumStyle}>hello there</h1>,
  document.getElementById("root")
);
//----------------------------
const date = new Date();
const correnttime = date.getHours();

let greating;
const customStyle = {
  color: ""
};

if (correnttime < 12) {
  greating = "Good morning";
  customStyle.color = "red";
} else if (correnttime < 18) {
  greating = "good Afternoon";
  customStyle.color = "blue";
} else {
  greating = "good night";
  customStyle.color = "green";
}

ReactDOM.render(
  <h1 className="chalinge" style={customStyle}>
    {greating}
  </h1>,
  document.getElementById("root")
);*/
//-------------------------

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
