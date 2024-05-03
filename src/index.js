(function () {  console.log("hello world");}());

import React from "react";
import ReactDOM from "react-dom";
import "index.scss";

let HelloWorld = () => {  
    console.log("hey");
    return <h1>Hello there World!</h1>}; 

ReactDOM.render(  <HelloWorld/>,  document.getElementById("root"));
