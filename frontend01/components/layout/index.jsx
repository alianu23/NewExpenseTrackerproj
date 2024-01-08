import React, { useContext } from "react";

import Balance from "../sign-up-step/Balance";
import Currency from "../sign-up-step/Currency";
import Finish from "../sign-up-step/Finish";
import { StepContext } from "@/context/StepProvider";

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
          <svg
            width="94"
            height="38"
            viewBox="5 0 2 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_2067)">
              <path
                d="M22.1294 14.0265V6.24878H14.1823V14.0265H6.23505V21.9737H14.1823V29.7515H22.1294V21.9737H30.0766V14.0265H22.1294ZM22.1294 21.8043H14.1823V14.1972H22.1294V21.8043Z"
                fill="#0166FF"
              />
            </g>
          </svg>
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
