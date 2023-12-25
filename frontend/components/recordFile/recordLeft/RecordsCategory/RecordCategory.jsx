import { Arrow, EyeSvg } from "@/components/iconsvg";
import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext, useEffect } from "react";

const RecordCategory = ({ data }) => {
  // const { deleteCategories } = useContext(CategoryContext);

  return (
    <div className="flex my-3 items-center justify-between">
      <div className="flex items-center gap-3">
        <EyeSvg />
        <h2>{data}</h2>
      </div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button">
          <Arrow />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a> Delete</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecordCategory;
