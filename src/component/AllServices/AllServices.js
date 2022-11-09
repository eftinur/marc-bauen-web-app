import React, { useEffect, useState } from "react";
import "./AllServices.css";
import ServCard from "../Home/ServCard/ServCard";

const AllServices = () => {
  // const services = useLoaderData();
  const [services, setServices] = useState();
  console.log(services);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setSpinner(false);
      });
  }, []);
  return (
    <div className="w-3/4 mx-auto my-12">
      {spinner ? (
        <>
          <div className="item spinner h-screen">
            <div className="loader-pulse"></div>
          </div>
        </>
      ) : (
        <>
          <div className="common-title">
            <h2>
              Our <span>Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
            {services.map((service) => (
              <ServCard key={service._id} service={service}></ServCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllServices;
