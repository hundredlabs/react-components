import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AlloyNav from "./sections/navigation/AlloyNav/AlloyNav";
import HeadStream from "./sections/hero/HeadStream/HeadStream";
import BlueSimple from "./sections/navigation/Blue-Simple/Blue-Simple";
import OmnisendNav from "./sections/navigation/OmnisendNav/OmnisendNav";
import TrueworkNav from "./sections/navigation/TrueworkNav/TrueWork";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TrueworkNav />
  </React.StrictMode>
);


reportWebVitals();
