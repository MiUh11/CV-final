import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title"> Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in touch</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                turpis lorem, maximus vitae volutpat eu, varius nec enim. Fusce
                pharetra.
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head"> Name</div>
                    <div className="sub-title"> Michal Uher</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head"> Adress</div>
                    <div className="sub-title"> Malacky, Slovakia</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head"> Email</div>
                    <div className="sub-title"> abc@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column right">
              <div className="text">Message me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required></input>
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required></input>
                  </div>
                </div>
                <div className="field ">
                  <input type="text" placeholder="Subject" required></input>
                </div>
                <div className="field textarea" required>
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Describe project.."
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
