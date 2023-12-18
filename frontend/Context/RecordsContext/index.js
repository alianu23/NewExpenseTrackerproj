import React, { useState } from "react";
import { createContext } from "react";

const RecordContext = createContext();

const RecordsProvider = ({ children }) => {
  const [feelExpInc, setFeelExpInc] = useState({
    transaction_type: "",
    balance: "",
    date: "",
    time: "",
    payee: "",
    note: "",
  });

  const changeRecord = (key, value) => {
    setFeelExpInc((prevStepData) => ({ ...prevStepData, [key]: value }));
  };
  const updateRecordForm = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8008/users/` + user.id,
        {
          transaction_type: feelExpInc.transaction_type,
          balance: feelExpInc.balance,
          date: feelExpInc.date,
          time: feelExpInc.time,
          payee: feelExpInc.payee,
          note: feelExpInc.note,
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
    <RecordContext.Provider value={{ updateRecordForm }}>
      {children}
    </RecordContext.Provider>
  );
};

export default RecordsProvider;
