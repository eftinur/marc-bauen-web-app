import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-brief w-3/4">
        <h1>
          Innovative arechitect in <br /> Moscow
        </h1>
        <p>
          Architecture is not simply a service, it is an inspiration <br />
          Good architecture transcends eras and cultures
        </p>
        <Link className="btn common-btn">Hire now</Link>
      </div>
    </div>
  );
};

export default Banner;
