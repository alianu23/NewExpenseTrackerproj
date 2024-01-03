import React, { useContext } from "react";
import { getIcons } from "@/utils";
import { CategoryContext } from "@/context/CategoryProvider";
import CatIcon from "./CatIcon";

const RecordIcons = ({ changeTransactionData, setSelectedCat }) => {
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
            setSelectedCat(el);
            changeTransactionData("category_id", el.id);
          }}
        >
          <CatIcon
            category_img={el.category_img}
            category_color={el.category_color}
          />
          {/* {getIcons(el.category_img, el.category_color)}
          {el.name} */}
        </button>
      ))}
    </div>
  );
};

export default RecordIcons;
