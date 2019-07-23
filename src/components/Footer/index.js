import React from "react";
import config from "../../../config";
import { Link } from "gatsby";
import logo from "../../assets/img/logo.svg";
import socialIcons from "../../assets/img/social.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4">
            <section className="section">
              <Link to="/">
                <img className="footer-logo" alt="Web Development" src={logo} />
              </Link>
            </section>
          </div>
          <div className="column is-4">
            <section className="section">
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/how-we-work">HOW WE WORK</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
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
            <Link to="/terms-and-conditions">Terms and Conditions</Link>{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
