import React from "react";
import { IconOne, IconTwo, IconThree, IconFour } from "../iconsvg";

const TopInfo = () => {
  return (
    <div className="flex w-full mt-6">
      <div className="flex-1 ">
        <img className="w-full h-full" src="/cardPng/large.png" />
      </div>
      <div className="flex-1 ml-7 p-4 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 mb-3 pb-2 text-xs">
          <IconTwo />
          <p className="ml-1 lg:text-base">Your Income</p>
        </div>
        <div>
          <span className="font-bold lg:text-4xl md:text-2xl text-xl">
            {" "}
            1,200,000₮
          </span>
          <p className="text-xs my-2 lg:text-base md:my-3 lg:my-4 text-slate-500">
            Your Income Amount
          </p>
          <div className="flex items-center">
            <IconOne />
            <span className="ml-1 lg:text-base text-xs">
              32% from last month
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 ml-7 p-4 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 mb-3 pb-2 text-xs">
          <IconFour />
          <p className="ml-1 lg:text-base">Total Expenses</p>
        </div>
        <div>
          <span className="font-bold lg:text-4xl md:text-2xl text-xl">
            {" "}
            -1,200,000₮
          </span>
          <p className="text-xs lg:text-base lg:my-4 md:my-3 my-2 text-slate-500">
            Your Expense Amount
          </p>
          <div className="flex items-center ">
            <IconThree />
            <span className="ml-1 lg:text-base text-xs">
              32% from last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
