import React, { useContext } from "react";
import { LogoBalance } from "../logo/LogoSteps";
import { StepContext } from "@/context/StepProvider";

const Balance = () => {
  const { changeStepData } = useContext(StepContext);

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-80">
      <LogoBalance />
      <h2 className="font-semibold text-xl dark:text-slate-300">
        Set up your cash Balance
      </h2>
      <input
        type="number"
        name="balance"
        onChange={(e) => {
          changeStepData(e.target.name, e.target.value);
        }}
        placeholder="Your cash balance"
        className="input input-bordered bg-[#F3F4F6] dark:text-black border-neutral-200 w-full mt-5 max-w-xs"
      />
      <h3 className="text-xs text-[#334155] dark:text-slate-400">
        How much cash do you have in your wallet?
      </h3>
    </div>
  );
};

export default Balance;
