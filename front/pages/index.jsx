import React from "react";
import Header from "@/components/header";
import TopInfo from "@/components/DashboardComp/TopInfo";
import MiddleInfo from "@/components/DashboardComp/MiddleInfo";
import BottomInfo from "@/components/DashboardComp/bottom/BottomInfo";
export default function Home() {
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
