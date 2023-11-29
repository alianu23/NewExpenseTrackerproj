"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { data, ItemDataMiddle } from "../../data/index.jsx";
import MiddleChartDoughnut from "./MiddleChartDoughnut.jsx";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const datas = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [3100000],
      backgroundColor: "rgba(132, 204, 22, 1)",
    },
    {
      label: "Dataset 2",
      data: [2000000],
      backgroundColor: "rgba(249, 115, 22, 1)",
    },
  ],
};

const MiddleInfo = () => {
  return (
    <div className="flex my-7 w-full">
      <div className="flex-1 bg-white p-7 mr-5">
        <h1 className="border-b-2 pb-3 font-semibold">Income - Expense</h1>
        <Bar options={options} data={datas} />
      </div>

      <div className="flex-1 bg-white ">
        <div className="flex border-b-2  pb-3 p-7 items-center justify-between">
          <h1 className="font-semibold">Income - Expense</h1>
          <h3>Jun 1 - Nov 30</h3>
        </div>

        <div className="p-3 flex mt-9 items-center">
          <div className="w-56 h-56">
            <Doughnut data={data} options={options} />
          </div>

          <div>
            {ItemDataMiddle.map((el) => (
              <MiddleChartDoughnut
                name={el.name}
                price={el.price}
                percentage={el.percentage}
                icon={el.icon}
                key={el.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInfo;
