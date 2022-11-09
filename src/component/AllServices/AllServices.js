import React from "react";
import { useLoaderData } from "react-router-dom";
import ServCard from "../Home/ServCard/ServCard";
import Card from "./Card";

const AllServices = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="w-3/4 mx-auto my-12">
      <div className="common-title">
        <h2>
          Our <span>Services</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
        {services.map((service) => (
          <Card key={service._id} service={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
