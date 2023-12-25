import React, { createContext, useContext, useEffect, useState } from "react";
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
  // console.log("Damjuulmaar bga user ", user.id);

  const [transactions, setTransactions] = useState([]);
  const [reFetch, setReFetch] = useState(false);

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
      setReFetch(!reFetch);
      toast.success("Record successfully added");
    } catch (error) {
      toast.error("Record denied");
    }
  };

  const getAllTransaction = async () => {
    console.log("getAlltransaction");

    try {
      const {
        data: { transactions },
      } = await axios.get(`http://localhost:8008/transactions/` + user.id);
      // console.log("TRANSACTION", transactions);
      setTransactions(transactions);
      // toast.success("Record successfully added");
    } catch (error) {
      console.log("Record denied");
    }
  };
  const [getSums, setGetSums] = useState();

  const getSum = async () => {
    console.log("getSum");
    try {
      const {
        data: { data },
      } = await axios.get(`http://localhost:8008/transactions/sum/` + user.id);
      console.log("123456", data);
      setGetSums(data);
    } catch (error) {
      console.log("expsum deer", error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        transactionData,
        changeTransactionData,
        addTransaction,
        getAllTransaction,
        getSum,
        getSums,
        reFetch,
        setReFetch,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
