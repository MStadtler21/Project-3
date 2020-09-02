import React from "react";
import { text } from "body-parser";

function Footer() {
  return (
    <div className="footer" style={{backgroundColor: "#bfdcae", marginTop: 35, height: 250, textAlign: "center"}}>
      <a href="https://github.com/hamery93/Project-3">GitHub</a>
      <br></br>
      Contributors:
      <div style={{listStyle:"none", textAlign:"center", margin: 0}}>
           <li>Andrew Kepson</li>
           <li>Hisham Amery </li>
           <li>Matt Stadtler</li>
           <li>Sam Morris</li>
           <li>Travis Martinez</li>
           Copyright 2020 ©
      </div>
    </div>
  );
}

export default Footer;