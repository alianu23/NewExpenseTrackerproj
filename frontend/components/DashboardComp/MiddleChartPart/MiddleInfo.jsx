import React from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const MiddleInfo = () => {
  const data1 = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#85CC16",
        data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
      },
      {
        label: "Expense",
        backgroundColor: "#F97316",
        data: [2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        data: [15, 15, 15, 15, 15],

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
  };

  const options1 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  const dataChart = [
    { color: "bg-[#1C64F2]", category: "Bills", amount: 5000000 },
    { color: "bg-[#E74694]", category: "Food", amount: 5000000 },
    { color: "bg-[#FDBA8C]", category: "Shopping", amount: 5000000 },
    { color: "bg-[#16BDCA]", category: "Insurance", amount: 5000000 },
    { color: "bg-[#F2901C]", category: "Clothing", amount: 5000000 },
  ];

  return (
    <div className="w-full grid grid-cols-2 my-10 gap-9">
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
          <span>Income - Expense</span>
        </div>
        <div className="card bg-white flex justify-center items-center p-4">
          <Bar data={data1} options={options1} />
        </div>
      </div>
      <div className=" bg-white rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
          <span>Income - Expense</span>
        </div>
        <div className="card bg-white flex flex-row justify-center items-center p-4">
          <div className="mr-10">
            <Doughnut options={options2} data={data2} />
          </div>
          <div className="flex-1 flex-col">
            {dataChart.map((data) => {
              return (
                <div
                  key={data.category}
                  className="flex flex-row items-center gap-3 mb-5"
                >
                  <div className={`w-5 h-5 rounded-full ${data.color}`}></div>
                  <h4>{data.category}</h4>
                  <span className="">{data.amount}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInfo;
