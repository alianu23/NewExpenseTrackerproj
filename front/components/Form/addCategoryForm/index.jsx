import React from "react";
import { DashArrowAdd } from "../../iconsvg";

const CategoryForm = ({ open, closeForm }) => {
  return (
    <dialog className={`modal`} open={open}>
      <div className="modal-box flex flex-col max-w-lg shadow-2xl">
        <div className="flex justify-between border-b-2 pb-3">
          <h1 className="font-semibold">Add Category</h1>
          <button>X</button>
        </div>
        <div className="flex my-5">
          <select className="select select-bordered bg-[#F9FAFB]">
            <option disabled selected>
              home
            </option>
            <option>Visa</option>
            <option>QPay</option>
          </select>
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
          className="btn bg-[#16A34A] w-full font-normal my-4 text-white rounded-full"
        >
          Add
        </button>
      </div>
    </dialog>
  );
};

export default CategoryForm;
