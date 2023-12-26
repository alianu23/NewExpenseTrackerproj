import React, { useContext, useEffect } from "react";
import Header from "@/components/header";
import RecordInfo from "@/components/recordFile/RecordInfo";
import { TransactionContext } from "@/context/TransactionContext";
import { CategoryContext } from "@/context/CategoryContext";

const Records = () => {
  const { reFetch } = useContext(TransactionContext);
  const { getCategories } = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
  }, [reFetch]);

  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <RecordInfo />
    </div>
  );
};

export default Records;
