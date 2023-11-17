import React from "react";
import RecordSmall from "./RecordSmall";
import RecordBig from "./RecordsCategory/RecordBig";

const RecordInfo = () => {
  return (
    <div className="flex container mx-auto w-screen h-screen">
      <div className="flex-0.5">
        <RecordSmall />
        <RecordBig />
      </div>
      <div className="flex-1 bg-slate-600"></div>
    </div>
  );
};

export default RecordInfo;
