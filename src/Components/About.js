import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>

          <div className="about-content">
            <div className="column left">
              <img src={require("./Photos/fotka.jpg").default} />
            </div>
            <div className="column right">
              <div className="text">
                I´m Michal Uher and I´m a <span>developer</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                consectetur aliquam ligula ut volutpat. Nam aliquet est et porta
                molestie. Ut maximus, sapien vitae blandit ullamcorper, odio
                turpis volutpat libero, eu consequat eros odio eget leo. Aenean
                aliquet ex vel elementum convallis. Maecenas sit amet mi
                fringilla, pharetra erat id, facilisis tortor. Mauris eget augue
                efficitur, tincidunt felis sit amet.
              </p>
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
