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
  const [refresh, setRefresh] = useState(false);
  const [showIcon, setShowIcon] = useState(<FaHome size={30} />);
  const [createCtr, setCreateCtr] = useState({
    name: "ner",
    description: "daraa n zasah bhaa",
    category_img: "",
    category_color: "",
  });

  const handleColor = (color) => {
    setCreateCtr({ ...createCtr, category_color: color });
  };
  const handleIcon = (icon) => {
    setCreateCtr({ ...createCtr, category_img: icon });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setCreateCtr({ ...createCtr, [e.target.name]: e.target.value });
  };

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

  const deleteCategories = async () => {
    try {
      const data = await axios.delete(
        "http://localhost:8008/categories/" + category.id
      );
      setRefresh(!refresh);
    } catch (error) {}
  };

  return (
    <CategoryContext.Provider
      value={{
        deleteCategories,
        inputValue,
        getCategories,
        category,
        showIcon,
        handleChange,
        handleIcon,
        handleColor,
        createCategory,
        createCtr,
        setShowIcon,
        setInputValue,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
