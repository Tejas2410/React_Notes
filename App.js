import React from 'react';
import ReactDOM from "react-dom";

const heading = React.createElement("h2" , {id : "head"} , "This is react element");

console.log(heading);

const jsxHeading = <h1 id = "heading">This is jsx code heading</h1>

console.log(jsxHeading);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);