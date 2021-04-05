import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <body>
        <section className="services" id="services">
          <div className="max-width">
            <h2 className="title">My services</h2>
            <div className="serv-content">
              <div className="card">
                <div className="box">
                  <i className="fas fa-paint-brush"></i>
                  <div className="text">Web Design</div>
                  <p>
                    "There is no one who loves pain itself, who seeks after it
                    and wants to have it, simply because it is pain..."
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <i className="fas fa-chart-line"></i>
                  <div className="text">Advertising</div>
                  <p>
                    "There is no one who loves pain itself, who seeks after it
                    and wants to have it, simply because it is pain..."
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <i className="fas fa-code"></i>
                  <div className="text">Apps design</div>
                  <p>
                    "There is no one who loves pain itself, who seeks after it
                    and wants to have it, simply because it is pain..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        ;
      </body>
    );
  }
}
export default Services;
