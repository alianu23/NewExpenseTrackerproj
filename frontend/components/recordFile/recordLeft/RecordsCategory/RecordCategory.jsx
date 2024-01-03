import { Arrow } from "@/components/iconsvg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React from "react";

const RecordCategory = ({ data, selectedCategories, onSelectCategory }) => {
  return (
    <div className="flex my-3 items-center justify-between">
      <div className="flex items-center gap-3">
        {
          <button
            onClick={() => {
              onSelectCategory(data);
            }}
          >
            {!selectedCategories.includes(data) && <FiEyeOff />}
            {selectedCategories.includes(data) && <FiEye />}
          </button>
        }
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
