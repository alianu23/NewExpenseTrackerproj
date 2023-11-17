import React from "react";

const Range = () => {
  return (
    <div>
      <h1 className="font-semibold my-5">Amount Range</h1>
      <div className="flex gap-4 mb-5">
        <button className="btn btn-outline border-slate-300 font-normal text-lg flex-1">
          0
        </button>
        <button className="btn btn-outline border-slate-300 font-normal  text-lg flex-1">
          1000
        </button>
      </div>
      <input
        type="range"
        min={0}
        max="1000"
        value="1000"
        className="range range-primary range-xs"
        step="25"
      />
      <div className="w-full flex justify-between text-lg px-2">
        <span>0</span>
        <span>1000</span>
      </div>
    </div>
  );
};

export default Range;
