import React from "react";
import { service_info } from "../Data";

const Service = () => {
  return (
    <div className="section-center services-center">
      {service_info.map((item) => {
        const { id, icon, title, text } = item;
        return (
          <article key={id} className="service">
            <span className="service-icon">
              <i className={icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">{text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Service;
