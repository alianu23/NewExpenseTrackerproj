import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import RecordForm from "@/components/form/addRecordForm";
import Profile from "./navbarMenu";
import { UserContext } from "@/context/UserProvider";
import { ThemeContext } from "@/context/ThemeProvider/ThemeContext";

const navigations = [
  { name: "Dashboard", path: "/" },
  { name: "Records", path: "/records" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const { theme, changeTheme } = useContext(ThemeContext);

  const closeForm = () => {
    setOpen(false);
  };

  const isActive = usePathname();

  return (
    <div className=" bg-white dark:bg-slate-800">
      <div className="flex lg:flex-row md:flex-row justify-between flex-col-reverse items-center px-6 container mx-auto py-3">
        <div className="lg:flex-1 flex items-center gap-3">
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
          {navigations.map((navigation, i) => (
            <Link
              className={`transition-all duration-75 dark:text-white ${
                isActive === navigation.path
                  ? "font-semibold"
                  : "hover:font-semibold "
              }`}
              key={i}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="lg:flex-0.5 flex lg:flex-row md:flex-row flex-col-reverse gap-3">
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              value={theme}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              onChange={(e) => {
                console.log("Theme change", e.target.value);
                changeTheme(e.target.value);
              }}
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="btn bg-[#0166FF]  text-white rounded-full"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 8C15.5 8.16576 15.4342 8.32473 15.3169 8.44194C15.1997 8.55915 15.0408 8.625 14.875 8.625H8.625V14.875C8.625 15.0408 8.55915 15.1997 8.44194 15.3169C8.32473 15.4342 8.16576 15.5 8 15.5C7.83424 15.5 7.67527 15.4342 7.55806 15.3169C7.44085 15.1997 7.375 15.0408 7.375 14.875V8.625H1.125C0.95924 8.625 0.800269 8.55915 0.683058 8.44194C0.565848 8.32473 0.5 8.16576 0.5 8C0.5 7.83424 0.565848 7.67527 0.683058 7.55806C0.800269 7.44085 0.95924 7.375 1.125 7.375H7.375V1.125C7.375 0.95924 7.44085 0.800269 7.55806 0.683058C7.67527 0.565848 7.83424 0.5 8 0.5C8.16576 0.5 8.32473 0.565848 8.44194 0.683058C8.55915 0.800269 8.625 0.95924 8.625 1.125V7.375H14.875C15.0408 7.375 15.1997 7.44085 15.3169 7.55806C15.4342 7.67527 15.5 7.83424 15.5 8Z"
                  fill="white"
                />
              </svg>
              Record
            </button>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <p className="text-slate-400 dark:text-slate-300">Hello</p>
              <p className="font-semibold dark:text-white">{user?.name}</p>
            </div>

            <Profile logout={logout} />
          </div>
        </div>
        {open && <RecordForm open={open} closeForm={closeForm} />}
      </div>
    </div>
  );
};

export default Header;
