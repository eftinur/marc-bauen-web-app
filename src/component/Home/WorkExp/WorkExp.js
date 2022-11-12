import React from "react";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <div className="work-main w-3/4 mx-auto my-20">
      <div className="common-title">
        <h2>
          Work <span>Experience</span>
        </h2>
      </div>
      <div className="work-brief my-12">
        <p>
          Since 2015, I carried out over 90 projects for more than 50 clients
          and partners around the world. We partner with our clients — becoming
          a part of their development team — to understand their vision,
          business objectives, and market opportunities. We consider market,
          financial, political and historical conditions as a way to guide a
          project’s design.
        </p>
        <p>
          I combine the broad experience and technical depth of a large
          international firm with the kind of direct, active, personal service
          usually found only in smaller firms. I will seek out the best local
          partners and experts to form teams that can effectively execute a
          project vision.
        </p>
      </div>
      <div className="work-exp grid lg:grid-cols-3 text-center shadow-2xl bg-base-100">
        <div>
          <span>Projects</span>
          <h2>90+</h2>
        </div>
        <div>
          <span>Clients</span>
          <h2>50+</h2>
        </div>
        <div>
          <span>Experience</span>
          <h2>7+ Years</h2>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
