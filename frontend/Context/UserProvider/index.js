import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formUserData, setLoginUserData] = useState({
    email: "anuka@gmail.com",
    password: "",
    name: "",
    re_password: "",
  });

  const changeFormUserData = (key, value) => {
    setLoginUserData({ ...formUserData, [key]: value });
  };

  const login = async () => {
    console.log("email", formUserData.email);
    console.log("pass", formUserData.password);
    if (!formUserData.email || !formUserData.password) {
      alert("You must write email and password");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
      console.log("first", data.message);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log(`iim ${error} garlaa`);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async () => {
    console.log("name", formUserData.name);
    console.log("email", formUserData.email);
    console.log("pass", formUserData.password);

    if (
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.name ||
      !formUserData.password
    ) {
      alert("You must fill all the input");
      return;
    }
    if (formUserData.re_password !== formUserData.password) {
      alert("Passwords are not same");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signup", {
        name: formUserData.name,
        email: formUserData.email,
        password: formUserData.password,
      });
      console.log("first", data.message);
      setUser(data.user);
      router.push("sign-up-step");
    } catch (error) {
      console.log(`iim ${error} garlaa`);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        formUserData,
        login,
        signup,
        changeFormUserData,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
