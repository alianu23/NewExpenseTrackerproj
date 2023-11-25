import { Arrow, EyeSvg } from "@/components/iconsvg";
import React from "react";

const RecordCategory = ({ data }) => {
  return (
    <div className="flex my-3 items-center justify-between">
      <div className="flex items-center gap-3">
        <EyeSvg />
        <h2>{data}</h2>
      </div>
      <Arrow />
    </div>
  );
};

export default RecordCategory;
