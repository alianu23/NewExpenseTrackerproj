import React from "react";
import RecordSmall from "./RecordsCategory/recordTop/RecordSmall";
import RecordBig from "./RecordsCategory/RecordBig";
import Range from "./RecordsCategory/recordBottom/Range";

const RecordInfo = () => {
  return (
    <div className="flex mb-60 container py-6 mx-auto">
      <div className="flex-0.5 border-2 bg-[#F9FAFB] px-5 py-8 rounded-xl">
        <RecordSmall />
        <RecordBig />
        <Range />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default RecordInfo;
