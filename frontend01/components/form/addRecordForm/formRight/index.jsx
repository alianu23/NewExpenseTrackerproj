import React, { useContext } from "react";
import { TransactionContext } from "@/context/TransactionProvider";

const FormRight = () => {
  const { transactionData, changeTransactionData } =
    useContext(TransactionContext);

  return (
    <div className="ml-5">
      <h1 className="mt-4 mb-2 dark:text-slate-100">Record Name</h1>
      <input
        type="text"
        className="dark:text-black bg-[#F9FAFB] border py-2 w-full pl-5 max-w-xs border-zinc-200  rounded"
        placeholder="Record Name"
        name="name"
        value={transactionData.name}
        onChange={(e) => {
          changeTransactionData(e.target.name, e.target.value);
        }}
      />
      <div>
        <h1 className="mt-4 mb-2 dark:text-slate-100">Note</h1>
        <textarea
          placeholder="Write a Message"
          cols="30"
          rows="10"
          name="description"
          className="border py-[14px] w-full pl-5 max-w-xs border-zinc-200 bg-[#F9FAFB] dark:text-black rounded"
          value={transactionData.description}
          onChange={(e) => {
            changeTransactionData(e.target.name, e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default FormRight;
