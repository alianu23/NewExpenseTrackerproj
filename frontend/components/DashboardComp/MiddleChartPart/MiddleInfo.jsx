import React, { useContext, useEffect, useState } from "react";
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
import { TransactionContext } from "@/context/TransactionContext";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const MiddleInfo = () => {
  const { getDoughnuts, getBars } = useContext(TransactionContext);

  const doughnutData = getDoughnuts.map((el) => {
    return el.sum;
  });
  const doughnutColor = getDoughnuts.map((el) => {
    return el.category_img;
  });

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
        data: doughnutData,

        backgroundColor: [
          "#800080",
          "#3467C5",
          "#3467C5",
          "#B922B9",
          "#8DDD17",
          "#FFA500",
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
          <span>Top 5 Category Income-Expense</span>
        </div>
        <div className="card bg-white flex flex-row justify-center items-center p-4">
          <div className="mr-10">
            <Doughnut options={options2} data={data2} />
          </div>
          <div className="flex-1 flex-col">
            {getDoughnuts.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex flex-row justify-around items-center mb-5"
                >
                  <div
                    className={`w-5 h-5 rounded-full ${data.category_color}`}
                  ></div>
                  <div>{data.category_img}</div>
                  <div>{data.sum}</div>
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
