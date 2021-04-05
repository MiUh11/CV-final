import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="NAVBAR">
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
              <a href="#">
                Portfo<span>lio.</span>
              </a>
            </div>
            <div className="menu-btn" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul
              id="menu"
              className={this.state.clicked ? "nav-menu.active" : "nav-menu"}
            >
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
