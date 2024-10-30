import React from "react";
import Title from "./Title";
import Tour from "./Tour";
const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />
        <Tour />
      </section>
    </div>
  );
};

export default Tours;
