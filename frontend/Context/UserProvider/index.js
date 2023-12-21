import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userAmount, setUserAmount] = useState(0);
  const [userId, setUserId] = useState("");

  const [formUserData, setLoginUserData] = useState({
    email: "",
    password: "",
    name: "",
    re_password: "",
    currency_type: "",
    balance: 0,
  });

  const changeFormUserData = (key, value) => {
    setLoginUserData({ ...formUserData, [key]: value });
  };

  const login = async () => {
    console.log("email", formUserData.email);
    console.log("pass", formUserData.password);
    if (!formUserData.email || !formUserData.password) {
      toast("You must write email and password", { autoClose: 3000 });
      return;
    }

    if (!formUserData.email.includes("@")) {
      toast("Wrong email or password");
      return;
    }

    try {
      setLoading(true);
      const {
        data: { user },
      } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
      // console.log("first", user);
      setUser(user);
      setUserAmount(user.balance);
      setUserId(user.id);
      router.push("/");
    } catch (error) {
      toast.error(`iim ${error}-toi aldaa garlaa`, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async () => {
    if (
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.name ||
      !formUserData.re_password
    ) {
      toast(`You must fill all the data`, { autoClose: 3000 });
      return;
    }

    if (formUserData.re_password !== formUserData.password) {
      toast(`Passwords are not same`, { autoClose: 3000 });
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8008/auth/signup", {
        name: formUserData.name,
        email: formUserData.email,
        password: formUserData.password,
      });
      console.log("data", data);
      setUser(data);
      // console.log("user", user);

      router.push("/sign-up-step");
    } catch (error) {
      toast.error(`${error.message} aldaa garlaa`, { autoClose: 3000 });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        formUserData,
        login,
        signup,
        changeFormUserData,
        logout,
        userAmount,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
