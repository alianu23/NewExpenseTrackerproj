import React from "react";
import { LogoFinish } from "../logo/LogoSteps";

const Finish = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <LogoFinish />
      <h2 className="font-semibold text-xl dark:text-slate-300">Good Job</h2>
      <h3 className="text-xs text-[#334155] text-wrap text-center dark:text-slate-400">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </h3>
    </div>
  );
};

export default Finish;
