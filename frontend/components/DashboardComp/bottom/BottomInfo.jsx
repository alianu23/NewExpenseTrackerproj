import React, { useContext } from "react";

import Bottom from "./BottomInfoData";
import { TransactionContext } from "@/Context/TransactionProvider";

const BottomInfo = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="w-full rounded-xl mb-6 bg-white ">
      <h1 className="border-b-2 py-6 pl-6 font-semibold">Last Record</h1>
      {transactions?.map((transaction) => (
        <Bottom transaction={transaction} key={transaction.id} />
      ))}
    </div>
  );
};

export default BottomInfo;
