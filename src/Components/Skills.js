import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent aliquet iaculis odio, sed cursus odio viverra sed. Duis
                convallis malesuada quam, id egestas elit tristique a.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Pellentesque nec ante
                dignissim augue mattis venenatis nec sit amet ligula. Aliquam
                tincidunt consectetur felis, non luctus sem efficitur eget.
                Phasellus.
              </p>
              <a href="#"> Read me</a>
            </div>

            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>80%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>50%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React</span>
                  <span>50%</span>
                </div>
                <div className="line react"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
