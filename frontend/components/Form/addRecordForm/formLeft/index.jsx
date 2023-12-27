import React, { useContext, useEffect, useState } from "react";

import { FaPlusCircle } from "react-icons/fa";
import { DashArrow } from "@/components/iconsvg";
import CategoryForm from "../../addCategoryForm";

import RecordIcons from "./RecordIcons";
import { TransactionContext } from "@/context/TransactionContext";
import { CategoryContext } from "@/context/CategoryContext";
import CatIcon from "./CatIcon";

const FormLeft = ({ closeForm }) => {
  const { transactionData, changeTransactionData, addTransaction } =
    useContext(TransactionContext);
  const { getCategories } = useContext(CategoryContext);

  const [selectedCat, setSelectedCat] = useState(null);

  // const closeForm = () => {
  //   setOpen(false);
  // };

  const addRecord = async () => {
    await addTransaction();
    console.log("close");
    closeForm();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className="flex my-3 rounded-full bg-[#F3F4F6] w-full gap-5 ">
        <button
          className={`flex-1 btn-md rounded-3xl border-none  ${
            transactionData.transaction_type === "EXP" &&
            "bg-[#0166FF] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "EXP");
          }}
        >
          Expense
        </button>
        <button
          className={`flex-1 btn-md rounded-3xl border-none ${
            transactionData.transaction_type === "INC" &&
            "bg-[#228822] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "INC");
          }}
        >
          Income
        </button>
      </div>
      <form>
        <div className="border-[1px] p-3 bg-[#F9FAFB] rounded-lg">
          <h1>Amount</h1>
          <input
            type="number"
            className="bg-[#F9FAFB] border-none"
            placeholder="$ 000,0"
            name="amount"
            onChange={(e) => {
              changeTransactionData(e.target.name, e.target.value);
            }}
          />
        </div>
        <h1 className="mt-4 mb-2 font-semibold">Category</h1>
        <details className="dropdown w-full">
          <summary className="m-1 flex items-center bg-[#F9FAFB] justify-between btn ">
            <div className="flex justify-between items-center w-full">
              {!selectedCat && "Find or Choose category"}
              {selectedCat && (
                <CatIcon
                  category_img={selectedCat.category_img}
                  category_color={selectedCat.category_color}
                />
              )}
              <DashArrow />
            </div>
          </summary>

          <ul className="shadow menu w-full dropdown-content z-[1] bg-base-100 rounded-box">
            <RecordIcons
              changeTransactionData={changeTransactionData}
              setSelectedCat={setSelectedCat}
            />
          </ul>
        </details>
        <div className="flex">
          <div className="flex-1">
            <label className="label">
              <span className="text-base label-text">Date</span>
            </label>
            <input
              type="datetime-local"
              placeholder="Oct 30,2023"
              className="w-full input input-bordered bg-[#F9FAFB]"
              name="updated_at"
              onChange={(e) => {
                console.log("first", e.target.value);
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <button
        onClick={addRecord}
        className={`px-2 py-3 modal-backdrop w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
          transactionData.transaction_type === "INC"
            ? "bg-[#228822]"
            : "bg-[#0166FF]"
        }`}
      >
        Add Record
      </button>
    </div>
  );
};

export default FormLeft;
