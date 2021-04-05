import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <body>
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content">
              <div className="text-1 "> Hello, my name is</div>
              <div className="text-2  ">
                Michal Uher
                <span className="typing"></span>
              </div>
              <div className="text-3 ">
                And I'd love to become <span>Webdeveloper</span>{" "}
              </div>
              <div>
                <button className="Hire-me">Hire me</button>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  }
}
export default Home;
