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
import { TransactionContext } from "@/context/TransactionProvider";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const MiddleInfo = () => {
  const { getDoughnuts, getBchartData } = useContext(TransactionContext);

  const [data, setData] = useState([null]);
  const [colorData, setColorData] = useState(["black"]);

  useEffect(() => {
    if (getDoughnuts) {
      setData(
        getDoughnuts?.map((e) => {
          return e.sum;
        })
      );
      setColorData(getDoughnuts?.map((e) => e.category_color));
    }
  }, [getDoughnuts]);

  const data1 = {
    labels: getBchartData?.labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55D",
        data: getBchartData?.incomeData,
      },
      {
        label: "Expense",
        backgroundColor: "#DC2625",
        data: getBchartData?.expenseData,
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        data: data,

        backgroundColor: colorData,
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
    <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-10 gap-9">
      <div className="bg-white dark:bg-slate-300 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 font-bold p-4 dark:border-slate-400 border-b-[1px]">
          <span className="dark:text-slate-500">Income - Expense</span>
        </div>
        <div className="card bg-white dark:bg-slate-300 flex justify-center items-center p-4">
          <Bar data={data1} options={options1} />
        </div>
      </div>
      <div className=" bg-white dark:bg-slate-300 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 font-bold p-4 border-b-[1px] dark:border-slate-400">
          <span className="dark:text-slate-500">
            Top 5 Category Income-Expense
          </span>
        </div>
        <div className="card bg-white dark:bg-slate-300 flex flex-row justify-center items-center p-4">
          <div className="mr-10">
            <Doughnut options={options2} data={data2} />
          </div>
          <div className="flex-1 flex-col">
            {getDoughnuts?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="grid grid-cols-3 lg:mb-5 md:mb-4 mb-3 w-full"
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-start`}
                    style={{ backgroundColor: data.category_color }}
                  ></div>
                  <div className="dark:text-slate-500 font-semibold ">
                    {data.category_img}
                  </div>
                  <div className="dark:text-slate-500 font-semibold flex items-end">
                    {data.sum}
                  </div>
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
