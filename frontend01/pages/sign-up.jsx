import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserProvider";

export default function Signup() {
  const router = useRouter();
  const { loading, signup, changeFormUserData, formUserData } =
    useContext(UserContext);
  return (
    <div className="flex w-screen h-screen">
      <div className="lg:flex-1 w-full flex flex-col items-center justify-center bg-white dark:bg-slate-800 gap-3">
        <div className="mr-8">
          <svg
            width="94"
            height="38"
            viewBox="5 0 2 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_2067)">
              <path
                d="M22.1294 14.0265V6.24878H14.1823V14.0265H6.23505V21.9737H14.1823V29.7515H22.1294V21.9737H30.0766V14.0265H22.1294ZM22.1294 21.8043H14.1823V14.1972H22.1294V21.8043Z"
                fill="#0166FF"
              />
            </g>
          </svg>
        </div>

        <h3 className="font-semibold text-xl dark:text-white">
          Create Geld account
        </h3>
        <p className="text-[#334155] dark:text-slate-400">
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
          className="input input-bordered dark:text-black bg-[#F3F4F6] border-neutral-200 w-full mt-6 max-w-xs"
        />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          placeholder="Email"
          value={formUserData.email}
          className="input input-bordered dark:text-black bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          placeholder="Password"
          value={formUserData.password}
          className="input input-bordered dark:text-black bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <input
          type="password"
          name="re_password"
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          placeholder="Re-password"
          value={formUserData.re_password}
          className="input input-bordered dark:text-black bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              signup();
            }
          }}
        />
        <button
          onClick={signup}
          disabled={loading}
          className="btn btn-primary w-full max-w-xs text-lg dark:bg-[#0167ffdf] text-white font-normal rounded-full"
        >
          Sign up
        </button>
        <div className="flex gap-2 mt-7">
          <h3 className="text-[#334155] dark:text-slate-400">
            Already have account?
          </h3>
          <button
            onClick={() => router.push("/log-in")}
            className="text-[#0166FF] dark:text-[#0167ffdf]"
          >
            Log in
          </button>
        </div>
      </div>
      <div className="lg:flex-1 w-0 bg-[#0166FF] dark:bg-[#0167ffdf]"></div>
    </div>
  );
}
