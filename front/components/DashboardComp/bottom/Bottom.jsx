import React from "react";
import { HomeIcon } from "../../iconsvg";

const Bottom = () => {
  return (
    <div className="border-b-2 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <HomeIcon />
        <div className="ml-3">
          <h2 className="font-medium">Lending & Renting</h2>
          <h3 className="text-gray-500 text-xs">3 hours ago</h3>
        </div>
      </div>

      <h4 className="text-lime-500 font-semibold">-1,000₮</h4>
    </div>
  );
};

export default Bottom;
