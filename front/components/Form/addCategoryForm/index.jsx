import React from "react";

import AddIcon from "./AddIcon";
import { DotIcon } from "@/components/data";

const CategoryForm = ({ open, closeForm }) => {
  return (
    <dialog className={`modal`} open={open}>
      <div className="modal-box flex flex-col max-w-lg shadow-2xl">
        <div className="flex justify-between border-b-2 pb-3">
          <h1 className="font-semibold">Add Category</h1>
          <button onClick={closeForm}>X</button>
        </div>
        <div className="flex items-center my-5">
          <AddIcon />
          <select className="select select-bordered ml-4 bg-[#F9FAFB] w-full ">
            <option disabled selected>
              Name
            </option>
            <option>Visa</option>
            <option>QPay</option>
          </select>
        </div>
        <button
          onClick={closeForm}
          className="btn bg-[#16A34A] modal-backdrop w-full font-normal my-4 text-white rounded-full"
        >
          Add
        </button>
      </div>
    </dialog>
  );
};

export default CategoryForm;
