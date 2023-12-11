import React, { useContext } from "react";
import Header from "../header";
import { useRouter } from "next/router";
import { UserContext } from "@/Context/UserProvider";

const UserProfile = () => {
  const route = useRouter();
  const { user } = useContext(UserContext);

  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <div className="flex items-center flex-col  container mx-auto min-h-screen">
        <h1 className="text-4xl my-10">Profile</h1>
        <div className="bg-white px-40 pb-40 pt-10 flex items-center gap-10">
          <div className="flex-1">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">USER NAME</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={user.name}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">E-MAIL</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={user.email}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">PASSWORD</span>
              </div>
              <input
                type="text"
                placeholder="Old password"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="New password"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Re-write new password"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">PHONE NUMBER</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <button
              onClick={() => route.push("/")}
              className="btn bg-[#0166FF] text-white rounded-lg mt-3 w-full"
            >
              save
            </button>
          </div>

          <div className="flex-1 w-56 ">
            <img
              className="w-56 rounded-full"
              alt="Profile pic"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
