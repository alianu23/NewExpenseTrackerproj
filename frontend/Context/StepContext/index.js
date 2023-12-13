import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserProvider";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { createContext, useState } = require("react");

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [step, setStep] = useState(1);
  const [stepData, setStepData] = useState({
    currency_type: "",
    balance: 0,
  });
  const changeStep = () => {
    setStep((step) => step + 1);
  };

  const changeStepData = (key, value) => {
    setStepData((prevStepData) => ({ ...prevStepData, [key]: value }));
  };
  const goToDashboard = async () => {
    console.log("sjafgasj", user);
    try {
      const { data } = await axios.put(
        `http://localhost:8008/users/` + user.id,
        {
          currency_type: stepData.currency_type,
          balance: stepData.balance,
        }
      );
      console.log("jjjj", data);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      toast.error(`Iim ${error}-toi aldaa garlaa`, { autoClose: 3000 });
    }
  };

  return (
    <StepContext.Provider
      value={{ step, changeStep, stepData, changeStepData, goToDashboard }}
    >
      {children}
    </StepContext.Provider>
  );
};
