import React from "react";
import RecordSmall from "./recordLeft/RecordsCategory/recordTop/RecordSmall";
import RecordBig from "./recordLeft/RecordsCategory/RecordBig";
import Range from "./recordLeft/RecordsCategory/recordBottom/Range";

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
