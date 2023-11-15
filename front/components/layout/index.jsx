import React, { useState } from "react";
import Balance from "../sign-up-step/Balance";
import Currency from "../sign-up-step/Currency";
import Finish from "../sign-up-step/Finish";
import LogoBig from "../logo/LogoBig";

const SignUpSteps = () => {
  const [step, setStep] = useState(1);

  const next = () => {
    setStep(step + 1);
  };
  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex flex-col items-center bg-white gap-3">
        <LogoBig />
        <ul className="steps">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step">Finish</li>
        </ul>
        <div className="mt-12">
          {step === 1 && <Currency />}
          {step === 2 && <Balance />}
          {step === 3 && <Finish />}
        </div>

        <button
          onClick={next}
          className="btn mt-5 btn-primary w-full max-w-xs text-lg text-white font-normal rounded-full"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SignUpSteps;
