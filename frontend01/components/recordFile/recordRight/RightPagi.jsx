import React, { useContext, useState } from "react";
import { DashArrow } from "@/components/iconsvg";
import { thousandify } from "@/utils";
import { UserContext } from "@/context/UserProvider";
import { TransactionContext } from "@/context/TransactionProvider";

const RightPagiTop = () => {
  const { userAmount } = useContext(UserContext);
  const { getSums } = useContext(TransactionContext);
  const [changeDate, setChange] = useState(1);

  const dates = [
    { date: "Last 10 days" },
    // { date: "Last 30 days" },
    // { date: "bg-blue-500" },
    // { date: "Yesterday" },
    // { date: "Today" },
    // { date: "Las 3 months" },
  ];

  const prev = () => {
    setChange(changeDate - 1);
  };

  const next = () => {
    setChange(changeDate + 1);
  };

  return (
    <div className="">
      <div className="flex lg:flex-row flex-col gap-3 justify-between mb-5">
        <div className="flex items-center">
          <button
            onClick={prev}
            className="btn bg-[#F9FAFB] dark:text-slate-700"
          >
            next
          </button>
          <p className="mx-3 dark:text-white">
            {dates.map((e) => (
              <p key={e.date}>{e.date}</p>
            ))}
          </p>
          <button
            onClick={next}
            className="btn bg-[#F9FAFB] dark:text-slate-700"
          >
            prev
          </button>
        </div>
        <div className="flex gap-10 rounded-md border-[1px] px-3 justify-between items-center bg-[#F9FAFB]">
          <button className="bg-[#F9FAFB] dark:text-slate-800">
            {" "}
            Newest first
          </button>
          <DashArrow />
        </div>
      </div>
      <div className="bg-white px-4 py-2 flex rounded-xl justify-between border-[1px] items-center">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked=""
            className="checkbox dark:bg-slate-300 ml-3"
          />
          <h2 className="font-medium dark:text-slate-800">Select all</h2>
        </div>
        <h4 className="text-gray-500 dark:text-slate-800 font-semibold">
          {thousandify(userAmount + getSums?.inc - getSums?.exp)}
        </h4>
      </div>
    </div>
  );
};

export default RightPagiTop;
