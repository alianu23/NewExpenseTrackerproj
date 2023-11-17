import React from "react";
import RecordCategory from "./RecordCategory";

const RecordBig = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Category</h1>
        <h1 className="text-slate-400">Clear</h1>
      </div>
      <RecordCategory />
    </div>
  );
};

export default RecordBig;
