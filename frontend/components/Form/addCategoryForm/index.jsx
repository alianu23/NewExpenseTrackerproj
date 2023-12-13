import React from "react";

import AddIcon from "./AddIcon";

const CategoryForm = ({ open, closeForm }) => {
  return (
    <dialog className="modal" open={open}>
      <div className="modal-box flex flex-col max-w-lg shadow-2xl">
        <div className="flex justify-between border-b-2 pb-3">
          <h1 className="font-semibold">Add Category</h1>
          <button onClick={closeForm}>X</button>
        </div>
        <div className="flex items-center my-5">
          <AddIcon />
          <div className="py-3 px-3 ml-4 bg-base-200 rounded-lg hover:border-purple-500 hover:border-2 w-full ">
            <input type="text" className="bg-base-200 w-full " />
          </div>
        </div>
        <form className="modal-backdrop">
          <button
            onClick={closeForm}
            className="btn bg-[#16A34A] modal-backdrop w-full font-normal my-4 text-white rounded-full"
          >
            Add
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default CategoryForm;
