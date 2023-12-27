import { getIcons } from "@/utils";
import React from "react";

const CatIcon = ({ category_img, category_color }) => {
  return (
    <span className="w-full font-normal gap-3 flex items-center">
      {getIcons(category_img, category_color)}
      {category_img}
    </span>
  );
};

export default CatIcon;
