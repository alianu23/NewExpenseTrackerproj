import React, { useContext, useEffect } from "react";

import { TransactionContext } from "@/context/TransactionContext";
import DataChange from "./DataChange";
import { CategoryContext } from "@/context/CategoryContext";

const BottomRecord = () => {
  const { transactions, selectedType, onSelectType } =
    useContext(TransactionContext);
  const { selectedCategories } = useContext(CategoryContext);
  console.log("first");
  const fileredTransactions =
    selectedCategories.length > 0
      ? transactions.filter((tr) =>
          selectedCategories.includes(tr.category_img)
        )
      : transactions;

  useEffect(() => {}, [transactions]);
  return (
    <>
      <div>
        <h1 className="my-4 font-semibold">Today</h1>
        {fileredTransactions?.map((transaction) => (
          <DataChange transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </>
  );
};

export default BottomRecord;
