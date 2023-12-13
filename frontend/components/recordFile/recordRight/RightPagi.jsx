import React, { useState } from "react";
import { DashArrow } from "@/components/iconsvg";

const RightPagiTop = () => {
  const [changeDate, setChange] = useState(1);

  const prev = () => {
    setChange(changeDate - 1);
  };

  const next = () => {
    setChange(changeDate + 1);
  };

  return (
    <div className="">
      <div className=" flex justify-between mb-5">
        <div>
          <button onClick={prev} className="btn bg-[#E5E7EB]">
            {"<"}
          </button>
          <button className=" mx-3">
            {changeDate === 0 && "Last 10 days"}
            {changeDate === 1 && "Last 30 days"}
            {changeDate === 2 && "Yesterday"}
            {changeDate === 3 && "Today"}
          </button>
          <button onClick={next} className="btn bg-[#E5E7EB]">
            {">"}
          </button>
        </div>
        <div className="flex gap-10 rounded-md border-[1px] px-3 items-center bg-[#F9FAFB]">
          <button className="bg-[#F9FAFB]"> Newest first</button>
          <DashArrow />
        </div>
      </div>
      <div className="bg-white px-4 py-2 flex rounded-xl justify-between border-[1px] items-center">
        <div className="flex items-center gap-3">
          <input type="checkbox" checked="checked" className="checkbox ml-3" />
          <h2 className="font-medium">Select all</h2>
        </div>
        <h4 className="text-gray-500 font-semibold">- 35,000₮</h4>
      </div>
    </div>
  );
};

export default RightPagiTop;
