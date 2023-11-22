import {
  DotIcon,
  DotIconOrange,
  DotIconRed,
  DotIconSky,
  DotIconYellow,
} from "@/components/data";
import React from "react";
import {
  FaHome,
  FaArrowRight,
  FaAirbnb,
  FaAddressBook,
  FaAddressCard,
  FaPen,
  FaBalanceScale,
} from "react-icons/fa";

const AddIcon = () => {
  return (
    <div>
      {" "}
      <details className="dropdown">
        <summary className="m-1 btn">
          <div className="flex items-center gap-7">
            <FaHome size={24} />
            <FaArrowRight size={15} />
          </div>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96">
          <div className="grid grid-cols-6 w-full border-b-2  ">
            <li>
              <a>
                <FaHome size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaAirbnb size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaAddressBook size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaAddressCard size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaPen size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaBalanceScale size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaHome size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaAirbnb size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaAddressBook size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaAddressCard size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaPen size={24} />
              </a>
            </li>
            <li>
              <a>
                <FaBalanceScale size={24} />
              </a>
            </li>
          </div>
          <div className="flex">
            <li>
              <a>
                <DotIcon />
              </a>
            </li>
            <li>
              <a>
                <DotIconOrange />
              </a>
            </li>
            <li>
              <a>
                <DotIconRed />
              </a>
            </li>
            <li>
              <a>
                <DotIconSky />
              </a>
            </li>
            <li>
              <a>
                <DotIconYellow />
              </a>
            </li>
          </div>
        </ul>
      </details>
    </div>
  );
};

export default AddIcon;
