import React from "react";
import { LogoBalance } from "../logo/LogoSteps";

const Balance = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-80">
      <LogoBalance />
      <h2 className="font-semibold text-xl">Set up your cash Balance</h2>
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full mt-5 max-w-xs"
      />
      <h3 className="text-xs text-[#334155]">
        How much cash do you have in your wallet?
      </h3>
    </div>
  );
};

export default Balance;
