import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import Pict from "../Assets/button.png";
import Mock from "../Assets/mockuuups.png";
import "./portfolio.css";

export default function Portfolio() {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  const imageAnimation = useSpring({
    scale: showDetail ? 1.1 : 1,
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="Portfolio-container" id="portfolio">
      <div className="Work">
        <h4>My Recent Work</h4>
        <h1>Portfolio</h1>
      </div>
      <div className="Detail" data-aos="fade-up" data-aos-duration="1000">
        <h2>Matara Website</h2>
        <h1>Movie Data Search Website, Especially Indonesian Movies</h1>
        <p>
          Complete and updated Indonesian movie data collection website. It is a
          project for the final exam of the semester at Multimedia Nusantara
          University which was made by a team of 4 people.
        </p>
        <a
          href="https://cinemanusantara.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <animated.img
            src={Pict}
            style={imageAnimation}
            onClick={handleClick}
          />
        </a>
      </div>
      <div className="Mockup" data-aos="fade-up" data-aos-duration="1000">
        <img src={Mock} alt="" />
      </div>
    </div>
  );
}
