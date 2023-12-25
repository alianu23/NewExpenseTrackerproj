import React, { useContext } from "react";
import { getIcons } from "@/utils";
import { CategoryContext } from "@/context/CategoryContext";

const RecordIcons = ({ changeTransactionData }) => {
  const { category } = useContext(CategoryContext);
  return (
    <div>
      {category.map((el) => (
        <button
          key={el.id}
          className="w-full font-normal mb-4 flex items-center gap-3 hover:opacity-50"
          onClick={(e) => {
            e.preventDefault();
            console.log("CategoryId", el.id);
            changeTransactionData("category_id", el.id);
          }}
        >
          {getIcons(el.category_img, el.category_color)}
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default RecordIcons;
