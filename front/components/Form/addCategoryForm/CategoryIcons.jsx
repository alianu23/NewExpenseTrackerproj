import React from "react";
import {
  MdChildFriendly,
  MdOutlineShoppingBag,
  MdHomeFilled,
  MdBadge,
  MdHourglassTop,
} from "react-icons/md";
import {
  FaTaxi,
  FaIdBadge,
  FaMicrophone,
  FaCalendar,
  FaHome,
  FaRoad,
  FaPeace,
  FaToiletPaper,
  FaBusAlt,
  FaAirFreshener,
} from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { BsGlobe, BsIntersect, BsMenuAppFill } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import {
  PiExamFill,
  PiIntersectFill,
  PiLadderFill,
  PiLeafFill,
  PiNumberCircleSevenFill,
  PiNumberFiveFill,
  PiOrangeSliceFill,
  PiQuestionFill,
  PiWatchFill,
} from "react-icons/pi";
import { RiImageFill } from "react-icons/ri";

const CategoryIcons = ({ IsColor, colored, setIsColor, setColored }) => {
  return (
    <div>
      <div className="grid grid-cols-6 w-full border-b-2  ">
        <li className="inline-block">
          <span>
            <MdHomeFilled
              onChange={(e) => setColored(e.target.value)}
              values={colored}
              size={30}
              color={IsColor}
            />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <FaHome
              onChange={(e) => setColored(e.target.value)}
              values={colored}
              size={30}
              color={IsColor}
            />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <FaIdBadge
              onChange={(e) => setColored(e.target.value)}
              size={30}
              color={IsColor}
            />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <MdBadge
              onChange={(e) => setColored(e.target.value)}
              size={30}
              color={IsColor}
            />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <MdChildFriendly
              onChange={(e) => setColored(e.target.value)}
              size={30}
              color={IsColor}
            />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <BsIntersect
              onChange={(e) => setColored(e.target.value)}
              size={30}
              color={IsColor}
            />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <RiImageFill
              onChange={(e) => setColored(e.target.value)}
              size={30}
              color={IsColor}
            />
          </span>
        </li>
        <li className="inline-block">
          <a>
            <FaMicrophone size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <FaAirFreshener size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <FaCalendar size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <BsMenuAppFill size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block ">
          <span>
            <FaTaxi size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <a>
            <PiIntersectFill size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <MdOutlineShoppingBag size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <GiDeliveryDrone size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <span>
            <PiNumberFiveFill size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <PiNumberCircleSevenFill size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <FaRoad size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <MdHourglassTop size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <PiOrangeSliceFill size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <BsGlobe size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <span>
            <FaPeace size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <a>
            <FaToiletPaper size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <BiPencil size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <PiExamFill size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <PiWatchFill size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block ">
          <span>
            <FaBusAlt size={30} color={IsColor} />
          </span>
        </li>
        <li className="inline-block">
          <a>
            <PiQuestionFill size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <PiLeafFill size={30} color={IsColor} />
          </a>
        </li>
        <li className="inline-block">
          <a>
            <PiLadderFill size={30} color={IsColor} />
          </a>
        </li>
      </div>

      <ul className="flex justify-center py-6 gap-4 ">
        <button
          className=" w-9 h-9 rounded-full bg-[#0166ff]"
          onClick={() => setIsColor("#0166ff")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#01B3FF]"
          onClick={() => setIsColor("#01B3FF")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#41CC00]"
          onClick={() => setIsColor("#41CC00")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#F9D100]"
          onClick={() => setIsColor("#F9D100")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#ff7b01]"
          onClick={() => setIsColor("#ff7b01")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#Ae01ff]"
          onClick={() => setIsColor("#Ae01ff")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#ff0101]"
          onClick={() => setIsColor("#ff0101")}
        ></button>
      </ul>
    </div>
  );
};

export default CategoryIcons;
