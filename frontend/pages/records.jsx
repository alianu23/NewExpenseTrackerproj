import React, { useContext, useEffect } from "react";
import Header from "@/components/header";
import RecordInfo from "@/components/recordFile/RecordInfo";
import { TransactionContext } from "@/context/TransactionProvider";
import { CategoryContext } from "@/context/CategoryProvider";

const Records = () => {
  // const { getAllTransaction, reFetch } = useContext(TransactionContext);
  // const { getCategories, refresh } = useContext(CategoryContext);

  // useEffect(() => {
  //   console.log("GAT");
  //   getAllTransaction();
  // }, [reFetch]);

  // useEffect(() => {
  //   getCategories();
  // }, [refresh]);

  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <RecordInfo />
    </div>
  );
};

export default Records;
