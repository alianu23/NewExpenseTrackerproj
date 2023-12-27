import React, { useContext, useEffect } from "react";

import { TransactionContext } from "@/context/TransactionContext";
import DataChange from "./DataChange";

const BottomRecord = () => {
  const { transactions } = useContext(TransactionContext);

  useEffect(() => {}, [transactions]);
  return (
    <>
      <div>
        <h1 className="my-4 font-semibold">Today</h1>
        {transactions?.map((transaction) => (
          <DataChange transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </>
  );
};

export default BottomRecord;
