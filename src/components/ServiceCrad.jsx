import React from "react";

const ServiceCrad = ({ serviceDetails }) => {
  return (
    <a href={serviceDetails.href}>
      <div className="service-imgbx">
        <div className="service-image">
          <img src={serviceDetails.img} />
        </div>
        <div className="service-name">
          <p>{serviceDetails.title}</p>
        </div>
      </div>
    </a>
  );
};

export default ServiceCrad;
