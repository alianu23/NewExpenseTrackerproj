import React from "react";

const MiddleChartDoughnut = ({ name, price, percentage, icon }) => {
  return (
    <div className=" ml-4  flex justify-between gap-12 w-full">
      <div className="">
        {/* <img src={icon} alt="" /> */}
        <h2>{name}</h2>
      </div>
      <div className="">
        <h3>{price}</h3>
      </div>
      <div>
        <p>{percentage}</p>
      </div>
    </div>
  );
};

export default MiddleChartDoughnut;
