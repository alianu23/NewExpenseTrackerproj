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
      <div>
        <Arrow />
      </div>
    </div>
  );
};

export default RecordCategory;
