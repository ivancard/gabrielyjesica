import React from "react";
import ReactDOM from "react-dom/client";
import Invitation from "./Invitation";
import cinta from "./assets/img/cinta.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <img
      src={cinta}
      alt="cinta"
      style={{
        position: "fixed",
        width: "120px",
        zIndex: "99",
      }}
    />
    <Invitation />
  </React.StrictMode>
);
