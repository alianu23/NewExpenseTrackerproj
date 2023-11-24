import React from "react";

import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";
import { Arrow, DashArrow } from "@/components/iconsvg";
import AddIcon from "../../addCategoryForm/AddIcon";

const FormLeft = ({ closeForm }) => {
  return (
    <div>
      <div role="tablist" className="tabs my-3 tabs-boxed">
        <a role="tab" className="tab ">
          Expense
        </a>
        <a role="tab" className="tab tab-active">
          Income
        </a>
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

          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("my_modal_1").showModal();
                  }}
                  className=" flex gap-2 w-full font-normal py-4 border-b-2"
                >
                  <svg
                    className="rounded-full bg-[#0166FF]"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 8C15.5 8.16576 15.4342 8.32473 15.3169 8.44194C15.1997 8.55915 15.0408 8.625 14.875 8.625H8.625V14.875C8.625 15.0408 8.55915 15.1997 8.44194 15.3169C8.32473 15.4342 8.16576 15.5 8 15.5C7.83424 15.5 7.67527 15.4342 7.55806 15.3169C7.44085 15.1997 7.375 15.0408 7.375 14.875V8.625H1.125C0.95924 8.625 0.800269 8.55915 0.683058 8.44194C0.565848 8.32473 0.5 8.16576 0.5 8C0.5 7.83424 0.565848 7.67527 0.683058 7.55806C0.800269 7.44085 0.95924 7.375 1.125 7.375H7.375V1.125C7.375 0.95924 7.44085 0.800269 7.55806 0.683058C7.67527 0.565848 7.83424 0.5 8 0.5C8.16576 0.5 8.32473 0.565848 8.44194 0.683058C8.55915 0.800269 8.625 0.95924 8.625 1.125V7.375H14.875C15.0408 7.375 15.1997 7.44085 15.3169 7.55806C15.4342 7.67527 15.5 7.83424 15.5 8Z"
                      fill="white"
                    />
                  </svg>
                  Add Category
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="w-full font-normal mb-4 flex items-center gap-3">
                  <FaHome color="blue" size={24} />
                  Home
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="w-full font-normal mb-4 flex items-center gap-3">
                  <FaGift color="red" size={24} />
                  Gift
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="w-full font-normal mb-4 flex items-center gap-3">
                  <FaTaxi color="orange" size={24} />
                  Taxi
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="w-full font-normal mb-4 flex items-center gap-3">
                  <FaWineGlassAlt color="purple" size={24} />
                  Drink
                </button>
              </a>
            </li>
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
        className="btn modal-backdrop bg-[#0166FF] w-full font-normal my-4 text-white rounded-full"
      >
        Add Record
      </button>
      <dialog id="my_modal_1" className="modal">
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
    </div>
  );
};

export default FormLeft;
