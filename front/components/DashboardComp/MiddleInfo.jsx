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
import { data } from "../Data/index.jsx";

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
        <h1 className="border-b-2 pb-3">Income - Expense</h1>
        <Bar options={options} data={datas} />
      </div>

      <div className="flex-1 bg-white ">
        <h1 className="border-b-2 pb-3 p-7">Income - Expense</h1>
        <div className="w-64 h-64 p-3 flex items-center">
          <Doughnut data={data} options={options} />
          <div>
            <p>Bills</p>
            <p>Food</p>
            <p>Shopping</p>
            <p>Insurance</p>
            <p>Clothing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInfo;
