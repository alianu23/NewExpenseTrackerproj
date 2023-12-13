import React, { useEffect, useState } from "react";

import { Slider } from "@mui/material";

const Range = () => {
  const [rangeChange, setRangeChange] = useState();
  const [minRange, setMinRange] = useState();

  useEffect(() => {}, [rangeChange]);
  return (
    <div>
      <h1 className="font-semibold my-5">Amount Range</h1>
      <div className="flex gap-2 mb-5">
        <input
          type="number"
          onChange={(e) => setMinRange(e.target.value)}
          value={minRange}
          className="input input-bordered border-slate-300 py-3 px-2 font-normal text-lg flex-1"
          placeholder="min val"
        />
        <input
          type="number"
          onChange={(e) => setRangeChange(e.target.value)}
          value={rangeChange}
          className="input input-bordered border-slate-300 py-3 px-2  font-normal text-lg flex-1"
          placeholder="max val"
        />
      </div>
      <input
        type="range"
        min={minRange}
        max="1000000"
        value={rangeChange}
        className="range range-primary range-xs"
        step="25"
      />
      {/* <Slider
        getAriaLabel={() => "Temperature range"}
        value={rangeChange}
        valueLabelDisplay="auto"
      /> */}
      <div className="w-full flex justify-between text-lg px-2">
        <span>{minRange}</span>
        <span>{rangeChange}</span>
      </div>
    </div>
  );
};

export default Range;
