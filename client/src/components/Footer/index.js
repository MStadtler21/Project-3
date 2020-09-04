import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      
      <div>
      View Source Code: <GithubIcon />
      <br></br>
      Contributors:
           <li>Andrew Kepson</li>
           <li>Hisham Amery </li>
           <li>Matt Stadtler</li>
           <li>Sam Morris</li>
           <li>Travis Martinez</li>
           © 2020
      </div>
    </div>
  );
}

export default Footer;