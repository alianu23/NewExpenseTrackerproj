import React, { useContext, useEffect } from "react";
import RecordSmall from "./recordLeft/recordTop/RecordSmall";
import RecordBig from "./recordLeft/recordsCategory/RecordBig";
import Range from "./recordLeft/recordBottom/Range";
import RightPagiTop from "./recordRight/RightPagi";
import BottomRecord from "./recordRight/bottomPart/BottomRecord";

const RecordInfo = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col mt-5 gap-3 justify-between px-3 w-full">
      <div className="lg:flex-0.5 md:flex-0.5 w-full md:w-1/4 lg:w-1/4 border-2 bg-[#F9FAFB] px-5 py-8 rounded-xl">
        <RecordSmall />
        <RecordBig />
        <Range />
      </div>
      <div className="lg:flex-1 w-full px-4">
        <RightPagiTop />
        <BottomRecord />
      </div>
    </div>
  );
};

export default RecordInfo;
