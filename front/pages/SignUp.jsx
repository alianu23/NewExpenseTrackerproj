import React from "react";
import { useRouter } from "next/router";
import Logo from "@/components/logo/Logo";

export default function Signup() {
  const router = useRouter();

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
          placeholder="Name"
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full mt-6 max-w-xs"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Re-password"
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        />
        <button
          onClick={() => router.push("/SignUpSteps")}
          className="btn btn-primary w-full max-w-xs text-lg text-white font-normal rounded-full"
        >
          Sign up
        </button>
        <div className="flex gap-2 mt-7">
          <h3>Already have account?</h3>
          <button
            onClick={() => router.push("/LogIn")}
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
