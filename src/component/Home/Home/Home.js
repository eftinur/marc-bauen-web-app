import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import HomeServices from "../HomeServices/HomeServices";
import WorkExp from "../WorkExp/WorkExp";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <WorkExp></WorkExp>
    </div>
  );
};

export default Home;
