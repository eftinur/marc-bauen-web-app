import React from "react";
import "./About.css";
import aboutImg from "../../../assets/about_photo.jpg";

const About = () => {
  return (
    <div className="about w-3/4 mx-auto my-12">
      <div className="about-brief">
      <div className="common-title">
        <h2>
          About <span>Bauen</span>
        </h2>
      </div>
        <p>
          A professional, creative and innovative Architect with 10 years
          experience. I provide best-fit architectural solutions for 5 projects
          a year with an average budget of $10 million.
        </p>

        <p>
          Technology consultation, assisting in defining scope and sizing of
          work, support opportunity identification and pursuit processes are the
          essential parts of my role as an Architect.{" "}
        </p>

        <p>
          I have professional communication skills to interact with all levels
          of management and clients. implementing innovative high-quality solutions for 20 clients a year.
        </p>
      </div>
      <div className="about-photo">
        <div className="about-wrapper w-3/4">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
