import React, { useContext } from "react";

import { DashArrow } from "@/components/iconsvg";
import { icons, colors } from "@/utils";
import { CategoryContext } from "@/context/CategoryContext";

const CategoryForm = ({ open, closeForm }) => {
  return (
    <dialog className="modal" open={open}>
      <div className="modal-box flex flex-col max-w-lg shadow-2xl">
        <div className="flex justify-between border-b-2 pb-3">
          <h1 className="font-semibold">Add Category</h1>
          <button onClick={closeForm}>X</button>
        </div>
        <div className="flex items-center my-5">
          <details className="dropdown">
            <summary className="m-1 btn">
              <div className="flex items-center gap-7">
                <span> {showIcon ? showIcon : icons[0].icon} </span>
                <DashArrow size={15} />
              </div>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96">
              <div>
                <div className="grid grid-cols-6 w-full gap-4 border-b-2 pb-2 cursor-pointer">
                  {icons.map((el) => {
                    return <button>{el.icon}</button>;
                  })}
                </div>

                <ul className="flex justify-center py-6 gap-4 ">
                  {colors.map((color) => {
                    return (
                      <button
                        className={`w-9 h-9 rounded-full ${color}`}
                      ></button>
                    );
                  })}
                </ul>
              </div>
            </ul>
          </details>
          <div className="py-3 px-3 ml-4 bg-base-200 rounded-lg hover:border-purple-500 hover:border-2 w-full ">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="bg-base-200 w-full "
            />
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
