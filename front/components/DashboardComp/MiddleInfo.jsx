import React from "react";
import Barchart from "../charts/barchart";
import DoughnutChart from "../charts/doughnut";

const MiddleInfo = () => {
  return (
    <div className="flex w-full">
      <div className="flex-1 bg-white mr-5">
        <h1>Income - Expense</h1>
        <Barchart />
      </div>
      <div className="flex-1 bg-white">
        <h1>Income - Expense</h1>
        <DoughnutChart />
      </div>
    </div>
  );
};

export default MiddleInfo;
