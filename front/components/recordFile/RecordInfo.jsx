import React from "react";
import RecordSmall from "./recordLeft/recordTop/RecordSmall";
import RecordBig from "./recordLeft/RecordsCategory/RecordBig";
import Range from "./recordLeft/recordBottom/Range";
import RightPagiTop from "./recordRight/RightPagi";
import BottomRecord from "./recordRight/BottomPart/BottomRecord";

const RecordInfo = () => {
  return (
    <div className="flex container py-6 mx-auto">
      <div className="flex-0.5 border-2 bg-[#F9FAFB] px-5 py-8 rounded-xl">
        <RecordSmall />
        <RecordBig />
        <Range />
      </div>
      <div className="flex-1 px-4">
        <RightPagiTop />
        <BottomRecord />
      </div>
    </div>
  );
};

export default RecordInfo;
