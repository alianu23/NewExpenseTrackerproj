import React, { useState } from "react";

import { FaPlusCircle } from "react-icons/fa";
import { DashArrow } from "@/components/iconsvg";
import CategoryForm from "../../addCategoryForm";

import RecordIcons from "./RecordIcons";

const FormLeft = () => {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex my-3 rounded-full bg-[#F3F4F6] w-full gap-5 ">
        <button className=" flex-1 btn-md rounded-3xl border-none bg-[#F3F4F6] focus:bg-[#0166FF] focus:text-white">
          Expense{" "}
        </button>
        <button className="flex-1 btn-md rounded-3xl border-none bg-[#F3F4F6] focus:bg-[#0166FF] focus:text-white">
          Income
        </button>
      </div>
      <form>
        <div className="border-[1px] p-3 bg-[#F9FAFB] rounded-lg">
          <h1>Amount</h1>
          <input type="number" className="bg-[#F9FAFB]" placeholder="$ 000,0" />
        </div>
        <h1 className="mt-4 mb-2 font-semibold">Category</h1>
        <details className="dropdown w-full">
          <summary className="m-1 flex items-center bg-[#F9FAFB] justify-between btn ">
            Find or Choose category
            <DashArrow />
          </summary>

          <ul className="shadow menu w-full dropdown-content z-[1] bg-base-100 rounded-box">
            <li className="w-full border-b-2">
              <a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  className="flex w-full items-center gap-2 font-normal py-3"
                >
                  <FaPlusCircle size={24} color="blue" />
                  Add Category
                </button>
              </a>
            </li>
            <RecordIcons />
          </ul>
        </details>
        <div className="flex">
          <div className="flex-1">
            <label className="label">
              <span className="text-base label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="Oct 30,2023"
              className="w-full input input-bordered bg-[#F9FAFB]"
            />
          </div>
          <div className="flex-1">
            <label className="label">
              <span className="text-base label-text">Time</span>
            </label>
            <input
              type="time"
              placeholder="4:15 PM"
              className="w-full input input-bordered bg-[#F9FAFB]"
            />
          </div>
        </div>
      </form>
      <button
        onClick={closeForm}
        className="btn modal-backdrop bg-[#0166FF] hover:bg-blue-800 w-full font-normal my-4 text-white rounded-full"
      >
        Add Record
      </button>
      {open && <CategoryForm open={open} closeForm={closeForm} />}
    </div>
  );
};

export default FormLeft;
