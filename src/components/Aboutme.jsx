import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Assets/profile.png";
import Email from "../Assets/email.png";
import Wa from "../Assets/whatsapp.png";
import ig from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import "./Aboutme.css";

export default function About() {
  const StyleColor = {
    color: "#DB7212",
  };

  const [profilePosition, setProfilePosition] = useState({ x: 0, y: 0 });
  const minY = -30;
  const maxY = 14; 

  function handleMouseEnter(event) {
    const profileImage = event.target;
    const rect = profileImage.getBoundingClientRect();
    const x = rect.left - profileImage.offsetLeft;
    let y = rect.top - profileImage.offsetTop;

    y = Math.max(minY, Math.min(maxY, y));

    setProfilePosition({ x, y });
  }

  function handleMouseLeave() {
    setProfilePosition({ x: 0, y: 0 });
  }

  return (
    <div className="About-container">
      <div className="Kiri">
        <img
          src={Profile}
          alt="Profile"
          style={{
            width: "700px",
            height: "651px",
            transform: `translate(${profilePosition.x}px, ${profilePosition.y}px)`,
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="Kanan">
        <h1 style={StyleColor}>Freelance UI/UX Designer,</h1>
        <h1>Turning your idea into cool web design</h1>
        <p>
          I am currently studying at Multimedia Nusantara University. I've spent the last few months learning the UI/UX Design.
          I am someone who is very interested in new things, and I always feel challenged to fill my youth with useful skills and experiences.
          My experience when running projects will really help me develop myself to reach my potential.
        </p>
        <div className="Contact-item">
          <a href="mailto:alviganteng14@gmail.com" target="blank">
            <img src={Email} alt="email" />
          </a>
        </div>
      </div>
      <div id="grid-container">
        <Link to="https://wa.me/6289633466729" target="blank">
          <img className="whatsapp-img" src={Wa} alt="" />
        </Link>
        <Link to="https://www.instagram.com/chairoftalvi" target="blank">
          <img className="instagram-img" src={ig} alt="" />
        </Link>
        <Link to="https://www.linkedin.com/in/alvi-chairofta-692364257/" target="blank">
          <img className="linkedin-img" src={linkedin} alt="" />
        </Link>
      </div>
    </div>
  );
}
