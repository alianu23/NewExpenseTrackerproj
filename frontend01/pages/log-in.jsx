import React, { useContext } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/logo/LogoW3";
import { UserContext } from "@/context/UserProvider";

export default function LogIn() {
  const router = useRouter();
  const { formUserData, changeFormUserData, login, loading } =
    useContext(UserContext);

  return (
    <div className="flex w-screen h-screen">
      <div className="lg:flex-1 w-full flex flex-col items-center justify-center bg-white dark:bg-slate-800 gap-3">
        <div className="flex items-center justify-center">
          <Logo />
          <h1 className="font-bold text-2xl mr-12 text-black dark:text-white">
            Geld
          </h1>
        </div>

        <h3 className="font-semibold dark:text-white text-xl ">Welcome Back</h3>
        <p className="text-[#334155] dark:text-slate-400">
          Welcome back, Please enter your details
        </p>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          className="input input-bordered dark:text-black bg-[#F3F4F6] border-neutral-200 w-full mt-6 max-w-xs"
          value={formUserData.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          className="input input-bordered dark:text-black bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              login();
            }
          }}
        />
        <button
          disabled={loading}
          onClick={login}
          className="btn btn-primary w-full max-w-xs text-lg text-white dark:bg-[#0167ffdf] font-normal rounded-full"
        >
          Log in
        </button>
        <div className="flex gap-2 mt-7">
          <h3 className="text-[#334155] dark:text-slate-400">
            Don't have an account?
          </h3>
          <button
            className="text-[#0166FF] dark:text-[#0167ffdf]"
            onClick={() => router.push("/sign-up")}
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="lg:flex-1 w-0 bg-[#0166FF] dark:bg-[#0167ffdf]"></div>
    </div>
  );
}
