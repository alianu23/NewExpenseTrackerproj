import React, { useContext } from "react";

import Balance from "../sign-up-step/Balance";
import Currency from "../sign-up-step/Currency";
import Finish from "../sign-up-step/Finish";
import { StepContext } from "@/context/StepProvider";
import Logo from "../logo/LogoW3";

const SignUpSteps = () => {
  const { step, changeStep, goToDashboard } = useContext(StepContext);

  const StepSwitch = () => {
    switch (step) {
      case 1:
        return (
          <ul className="steps dark:text-white  lg:w-1/5">
            <li className="step step-primary ">Currency</li>
            <li className="step">Balance</li>
            <li className="step">Finish</li>
          </ul>
        );
      case 2:
        return (
          <ul className="steps dark:text-white w-1/5">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        );

      case 3:
        return (
          <ul className="steps dark:text-white w-1/5">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step step-primary">Finish</li>
          </ul>
        );
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex flex-col items-center bg-white dark:bg-slate-800 gap-3">
        <div className="flex items-center mt-10 mr-20 ml-6">
          <Logo />
          <h1 className="text-2xl text-black font-semibold dark:text-white  mb-1">
            Geld
          </h1>
        </div>

        {StepSwitch()}
        <div className="mt-20">
          {step === 1 && <Currency />}
          {step === 2 && <Balance />}
          {step === 3 && <Finish />}
        </div>
        <div>
          {step === 3 && <Finish /> ? (
            <button
              onClick={goToDashboard}
              className="btn mt-5 btn-primary w-full px-32 max-w-lg text-lg text-white dark:bg-[#0167ffdf] font-normal rounded-full"
            >
              Go to Dashboard
            </button>
          ) : (
            <button
              onClick={changeStep}
              className="btn mt-5 btn-primary w-full px-32 max-w-lg text-lg text-white dark:bg-[#0167ffdf] font-normal rounded-full"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpSteps;
