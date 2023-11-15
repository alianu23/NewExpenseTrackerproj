import React from "react";
import { LogoBalance } from "../logo/LogoSteps";

const Balance = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-20">
      <LogoBalance />
      <h2 className="font-semibold text-xl">Set up your cash Balance</h2>
      <div className="w-full">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full mt-5 max-w-xs"
        />
      </div>
      <div className="w-full">
        <h3 className=" text-sm">How much cash do you have in your wallet?</h3>
      </div>
    </div>
  );
};

export default Balance;
