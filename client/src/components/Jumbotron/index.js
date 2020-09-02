import React from "react";


function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 50, clear: "both", padding: 5, textAlign: "center", fontFamily: "Roboto Mono", backgroundColor: "#bfdcae",}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
