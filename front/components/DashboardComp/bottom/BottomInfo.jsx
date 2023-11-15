import React from "react";

import Bottom from "./Bottom";

const BottomInfo = () => {
  return (
    <div className="w-full rounded-xl mb-6 bg-white">
      <h1 className="border-b-2 py-6 pl-6 font-semibold">Last Record</h1>
      <div className="px-7">
        <Bottom />
        <Bottom />
        <Bottom />
        <Bottom />
        <Bottom />
      </div>
    </div>
  );
};

export default BottomInfo;
