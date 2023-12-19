import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "",
    amount: null,
    transaction_type: "",
    description: "",
    category_id: "",
    updated_at: "",
  });

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);

    try {
      const { data } = await axios.post("http://localhost:8008/transactions/", {
        ...transactionData,
        user_id: user.id,
      });
      toast.success("Record successfully added");
    } catch (error) {
      toast.error("Record denied");
    }
  };

  return (
    <TransactionContext.Provider
      value={{ transactionData, changeTransactionData, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
