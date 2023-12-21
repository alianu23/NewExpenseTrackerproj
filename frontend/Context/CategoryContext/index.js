import axios from "axios";
import React, { createContext, useContext, useState } from "react";

import { UserContext } from "../UserProvider";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [category, setCategory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showIcon, setShowIcon] = useState(<FaHome size={30} />);
  const [createCtr, setCreateCtr] = useState({
    name: "ner",
    description: "daraa n zasah bhaa",
    category_img: "",
    category_color: "",
  });

  const createCategory = async () => {
    try {
      const { data } = await axios.post("http://localhost:8008/categories", {
        ...createCtr,
        user_id: user.id,
      });
      setRefresh(!refresh);
      toast.success("Record successfully added");
    } catch (error) {
      toast.error("Record denied");
    }
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8008/categories");
    console.log("RES", categories);
    setCategory(categories);
  };

  return (
    <CategoryContext.Provider value={{}}>{children}</CategoryContext.Provider>
  );
};

export default CategoryProvider;
