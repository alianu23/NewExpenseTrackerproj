import React from "react";

const FormLeft = ({ closeForm }) => {
  return (
    <div>
      <div role="tablist" className="tabs my-3 tabs-boxed">
        <a role="tab" className="tab tab-active">
          Expense
        </a>
        <a role="tab" className="tab ">
          Income
        </a>
      </div>
      <form action="" method="post">
        <div className="border-[1px] p-3 bg-[#F9FAFB] rounded-lg">
          <h1>Amount</h1>
          <input type="number" className="bg-[#F9FAFB]" placeholder="$ 000,0" />
        </div>
        <h1 className="mt-4 mb-2">Category</h1>
        <select className="select select-bordered bg-[#F9FAFB] w-full max-w-xs">
          <option disabled selected>
            Choose
          </option>
          <option>Home</option>
          <option>Gift</option>
          <option>Food</option>
          <option>Drink</option>
        </select>
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
        className="btn bg-[#0166FF] w-full font-normal my-4 text-white rounded-full"
      >
        Add Record
      </button>
    </div>
  );
};

export default FormLeft;
