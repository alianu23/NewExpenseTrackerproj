import React from "react";

const MiddleChartDoughnut = ({ name, price, percentage, icon }) => {
  return (
    <div className=" ml-4 flex justify-between gap-12 w-full">
      <div className="mb-5 font-medium">
        <h2>{name}</h2>
      </div>
      <div className="font-medium">
        <h3>{price}</h3>
      </div>
      <div>
        <p className="font-medium">{percentage}</p>
      </div>
    </div>
  );
};

export default MiddleChartDoughnut;
