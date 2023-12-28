import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { DoughnutData } from "@/components/Data";

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
      } = await axios.get("http://localhost:8008/transactions/" + user.id);
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
      } = await axios.get("http://localhost:8008/transactions/sum/" + user.id);
      // console.log("123456", data);
      setGetSums(data);
    } catch (error) {
      console.log("expsum deer", error);
    }
  };

  const [getBchartData, setGetBchartData] = useState([]);

  const getBarData = async () => {
    console.log("getBarData");
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:8008/transactions/bar/" + user.id);
      console.log("BARCHART", data);
      setGetBchartData(data);
    } catch (error) {
      console.log("bar chart CTX deer", error);
    }
  };

  const [getDoughnuts, setGetDoughnuts] = useState();

  const getDoughnutData = async () => {
    console.log("getDoughnutData");
    try {
      const {
        data: { data },
      } = await axios.get(
        "http://localhost:8008/transactions/doughnut/" + user.id
      );
      console.log("DOUGHNUT", data);
      setGetDoughnuts(data);
    } catch (error) {
      console.log("doughnut chart CTX deer", error);
    }
  };

  // console.log("getBars CTX", getExpBarData);
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
        getBarData,
        getDoughnutData,
        getDoughnuts,
        getBchartData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
