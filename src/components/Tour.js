import React from "react";
import { tours } from "../Data";
const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((item) => {
        const { id, image, date, title, info, location, duration, cost } = item;
        return (
          <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{info}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {location}
                </p>
                <p>{duration}</p>
                <p>{cost}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;
