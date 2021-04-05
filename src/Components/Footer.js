import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span>
          Created by <a href="#"> Michal Uher </a> |
          <span className="float-right " className="far fa-copyright">
            2021 All rights reserved.
          </span>
        </span>
      </footer>
    );
  }
}
export default Footer;
