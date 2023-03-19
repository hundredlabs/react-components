import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
navigation
import Navigation from "./sections/navigation/NavClickUp/NavclickUp";
import logo from './click.png';
import AlloyNav from "./sections/navigation/AlloyNav/AlloyNav";
import HeadStream from "./sections/hero/HeadStream/HeadStream";
import BlueSimple from "./sections/navigation/Blue-Simple/Blue-Simple";
 main

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 navigation
    <Navigation image={logo} />
    <hr></hr>

 main
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
