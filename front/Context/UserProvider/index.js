import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loginUserData, setLoginUserData] = useState({
    email: "anuka@gmail.com",
    password: "",
  });
  const [signupUserData, setSignupUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeSignupUserData = (key, value) => {
    setSignupUserData({ ...signupUserData, [key]: value });
  };

  const changeLoginUserData = (key, value) => {
    setLoginUserData({ ...loginUserData, [key]: value });
  };

  const login = async () => {
    console.log("email", loginUserData.email);
    console.log("pass", loginUserData.password);
    if (!loginUserData.email || !loginUserData.password) {
      alert("You must write email and password");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: loginUserData.email,
        userPassword: loginUserData.password,
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
    console.log("name", signupUserData.name);
    console.log("email", signupUserData.email);
    console.log("pass", signupUserData.password);

    if (!signupUserData.email || !signupUserData.password) {
      alert("You must fill all the input");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signup", {
        name: signupUserData.name,
        email: signupUserData.email,
        password: signupUserData.password,
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
        loginUserData,
        login,
        signup,
        changeLoginUserData,
        changeSignupUserData,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
