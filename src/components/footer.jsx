import React from "react";
import { Link } from "react-scroll";
import Logo from "../Assets/AlviChairofta.png";
import ig from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import Wa from "../Assets/whatsapp.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Let’s make something amazing together.</h1>
            <img src={Logo} alt="" />
            <p>UI/UX Designer</p>
          </div>
          <div className="col-md-3 col-6">
            <ul className="footer-links">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="mailto:alviganteng14@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <ul className="footer-m">
              <li>
                <a
                  href="https://wa.me/6289633466729"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Wa} alt="Whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chairoftalvi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ig} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alvi-chairofta-692364257/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
