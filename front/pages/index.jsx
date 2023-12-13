import React, { useContext, useEffect } from "react";
import Header from "@/components/header";
import TopInfo from "@/components/dashboardComp/TopInfo";
import MiddleInfo from "@/components/dashboardComp/middleChartPart/MiddleInfo";
import BottomInfo from "@/components/dashboardComp/bottom/BottomInfo";
import { useRouter } from "next/router";
import { UserContext } from "@/Context/UserProvider";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <main
        className={`flex container mx-auto min-h-screen flex-col items-center justify-between `}
      >
        <TopInfo />
        <MiddleInfo />
        <BottomInfo />
      </main>
    </div>
  );
}
