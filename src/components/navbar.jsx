import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/App.css';
import Logo from "../Assets/AlviChairofta..png"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            className="logo"
          >
           <img src={Logo} alt="" />
          </Link>
          <button className={`navbar-toggler ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Technologies
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="mailto:alviganteng14@gmail.com"
                className="nav-link"
                onClick={toggleNav}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
