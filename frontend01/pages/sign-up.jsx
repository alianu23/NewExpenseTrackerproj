import React, { useContext } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/logo/LogoW3";
import { UserContext } from "@/context/UserProvider";

export default function Signup() {
  const router = useRouter();
  const { loading, signup, changeFormUserData, formUserData } =
    useContext(UserContext);
  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-white gap-3">
        <Logo />
        <h3 className="font-semibold text-xl ">Create Geld account</h3>
        <p className="text-[#334155]">
          Sign up below to create your wallet account
        </p>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          placeholder="Name"
          value={formUserData.name}
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full mt-6 max-w-xs"
        />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          placeholder="Email"
          value={formUserData.email}
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          placeholder="Password"
          value={formUserData.password}
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <input
          type="password"
          name="re_password"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          placeholder="Re-password"
          value={formUserData.re_password}
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <button
          onClick={signup}
          disabled={loading}
          className="btn btn-primary w-full max-w-xs text-lg text-white font-normal rounded-full"
        >
          Sign up
        </button>
        <div className="flex gap-2 mt-7">
          <h3 className="text-[#334155]">Already have account?</h3>
          <button
            onClick={() => router.push("/log-in")}
            className="text-[#0166FF]"
          >
            Log in
          </button>
        </div>
      </div>
      <div className="flex-1 bg-[#0166FF] "></div>
    </div>
  );
}
