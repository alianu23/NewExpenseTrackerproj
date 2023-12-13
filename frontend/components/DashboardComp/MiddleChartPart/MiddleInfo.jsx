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
import { data } from "../../data/index.js";

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
    <div className="flex my-7 w-full lg:flex-row flex-col ">
      <div className="flex-1 bg-white w-full p-7 mr-5">
        <h1 className="border-b-2 pb-3 font-semibold">Income - Expense</h1>
        <div>
          <Bar options={options} data={datas} />
        </div>
      </div>

      <div className="flex-1 bg-white ">
        <div className="flex border-b-2 pb-3 p-7 items-center justify-between">
          <h1 className="font-semibold">Income - Expense</h1>
          <h3>Jun 1 - Nov 30</h3>
        </div>

        <div className="p-3 flex lg:gap-10 gap-2 items-center justify-center">
          <div className="lg:w-64 lg:h-64 w-32 h-32">
            <Doughnut data={data} options={options} />
          </div>

          <div className="flex lg:gap-10 gap-3">
            <div className="lg:text-lg text-xs">
              <p>Bills</p>
              <p>Food</p>
              <p>Shopping</p>
              <p>Insurance</p>
              <p>Clothing</p>
            </div>
            <div className="lg:text-lg text-xs">
              <p>5'000'000</p>
              <p>5'000'000</p>
              <p>5'000'000</p>
              <p>5'000'000</p>
              <p>5'000'000</p>
            </div>
            <div className="lg:text-lg text-xs">
              <p>15.50%</p>
              <p>15.50%</p>
              <p>15.50%</p>
              <p>15.50%</p>
              <p>15.50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInfo;
