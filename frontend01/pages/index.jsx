import React, { useContext, useEffect } from "react";

import Header from "@/components/header";
import TopInfo from "@/components/dashboardComp/TopInfo";
import MiddleInfo from "@/components/dashboardComp/middleChartPart/MiddleInfo";
import BottomInfo from "@/components/dashboardComp/bottom/BottomInfo";
import { TransactionContext } from "@/context/TransactionProvider";

export default function Home() {
  const { getAllTransaction, getBarData, getSum, getDoughnutData, reFetch } =
    useContext(TransactionContext);

  useEffect(() => {
    getAllTransaction();
    getBarData();
    getSum();
    getDoughnutData();
  }, [reFetch]);

  return (
    <div className="bg-[#F6F6F6] max-w-screen-2xl">
      <Header />
      <dashboard className={`flex flex-col items-center justify-between px-3`}>
        <TopInfo />
        <MiddleInfo />
        <BottomInfo />
      </dashboard>
    </div>
  );
}
