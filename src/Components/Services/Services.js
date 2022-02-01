import React from "react";
import { ServiceCard } from "./ServiceCard";
import ServiceData from "./serviceData";

const Services = () => {
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className=" container-fluid mb-5  ">
        <div className="row d-flex">
          <div className="col-md-10 mx-auto ">
            <div className="row gy-4">
              {ServiceData.map((value, index) => {
                return (
                  <ServiceCard
                    img={value.img}
                    title={value.title}
                    description={value.description}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
