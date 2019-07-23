import React from "react";
import config from "../../../config";
import logo from "../../assets/img/logo.svg";
import socialIcons from "../../assets/img/social.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4">
            <section className="section">
              <img className="footer-logo" alt="Web Development" src={logo} />
            </section>
          </div>
          <div className="column is-4">
            <section className="section">
              <ul>
                <li>
                  <a href="/">Solutions</a>
                </li>
                <li>
                  <a href="/">HOW WE WORK</a>
                </li>
                <li>
                  <a href="/">FINTECH</a>
                </li>
                <li>
                  <a href="/">Projects</a>
                </li>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
              </ul>
            </section>
          </div>
          <div className="column is-4">
            <section className="section">
              <h2>CONTACT US</h2>
              <ul>
                <li>03108511464</li>
                <li>enquiries@gamier.co.uk</li>
                <li>
                  <img src={socialIcons} alt="social icons" />
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="content has-text-centered">
          <p>
            {config.copyright}{" "}
            <a href="/terms-and-conditions">Terms and Conditions</a>{" "}
            <a href="/privacy-policy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
