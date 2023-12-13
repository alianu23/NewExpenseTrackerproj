import React from "react";
import { FoodIcon, HomeIcon } from "@/components/iconsvg";

const DataChange = () => {
  return (
    <div className="bg-white px-4 py-2 flex rounded-xl justify-between border-[1px] items-center">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked="checked" className="checkbox ml-3" />
        <HomeIcon />
        <div>
          <h2 className="font-medium">Lending & Renting</h2>
          <h3 className="text-gray-500 text-xs">14:00</h3>
        </div>
      </div>
      <h4 className="text-lime-500 font-semibold">-1,000₮</h4>
    </div>
  );
};
export const DataChangeFood = () => {
  return (
    <div className="bg-white mt-3 px-4 py-2 flex rounded-xl justify-between border-[1px] items-center">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked="checked" className="checkbox ml-3" />
        <FoodIcon />
        <div>
          <h2 className="font-medium">Food & Drinks</h2>
          <h3 className="text-gray-500 text-xs">14:00</h3>
        </div>
      </div>
      <h4 className="text-red-500 font-semibold">-1,000₮</h4>
    </div>
  );
};

export default DataChange;
