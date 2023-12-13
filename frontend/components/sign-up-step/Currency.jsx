import React from "react";
import { LogoCurrency } from "../logo/LogoSteps";

const Currency = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <LogoCurrency />
      <h2 className="font-semibold text-xl">Select base currency</h2>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Select currency
        </option>
        <option>MNT - Mongolian Tugrik</option>
        <option>USD - US Dollar</option>
        <option>CNY - China Yuan</option>
      </select>
      <h3 className="text-xs text-[#334155]">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
      </h3>
    </div>
  );
};

export default Currency;
