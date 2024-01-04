import React, { useContext } from "react";

import Bottom from "./BottomInfoData";
import { TransactionContext } from "@/context/TransactionProvider";

const BottomInfo = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="w-full rounded-xl mb-6 bg-white dark:bg-slate-300 ">
      <h1 className="border-b-2 dark:border-slate-400 dark:text-slate-500 w-full py-6 pl-6 font-semibold">
        Last Record
      </h1>
      {transactions?.map((transaction) => (
        <Bottom transaction={transaction} key={transaction.id} />
      ))}
    </div>
  );
};

export default BottomInfo;
