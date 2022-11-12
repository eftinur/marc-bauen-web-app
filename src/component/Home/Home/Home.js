import React from "react";
import useTitle from "../../../Hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import HomeServices from "../HomeServices/HomeServices";
import WorkExp from "../WorkExp/WorkExp";

const Home = () => {
  useTitle('Home')
  return (
    <div className="min-h-screen bg-base-100">
      <Banner></Banner>
      <HomeServices></HomeServices>
      <About></About>
      <WorkExp></WorkExp>
    </div>
  );
};

export default Home;
