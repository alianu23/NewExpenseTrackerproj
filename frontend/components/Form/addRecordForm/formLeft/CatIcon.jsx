import { getIcons } from "@/utils";
import React from "react";

const CatIcon = ({ name, color }) => {
  return (
    <span className="w-full font-normal mb-4 flex items-center">
      {getIcons(name, color)}
      {name}
    </span>
  );
};

export default CatIcon;
