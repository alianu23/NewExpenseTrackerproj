import React from "react";

import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";

import { PiForkKnifeFill, PiTShirtFill } from "react-icons/pi";

const RecordIcons = () => {
  return (
    <div>
      <li>
        <a>
          <button className="w-full font-normal my-4 flex items-center gap-3">
            <FaHome color="blue" size={24} />
            Home
          </button>
        </a>
      </li>
      <li>
        <a>
          <button className="w-full font-normal mb-4 flex items-center gap-3">
            <FaGift color="red" size={24} />
            Gift
          </button>
        </a>
      </li>
      <li>
        <a>
          <button className="w-full font-normal mb-4 flex items-center gap-3">
            <PiForkKnifeFill color="orange" size={24} />
            Food
          </button>
        </a>
      </li>
      <li>
        <a>
          <button className="w-full font-normal mb-4 flex items-center gap-3">
            <FaWineGlassAlt color="purple" size={24} />
            Drink
          </button>
        </a>
      </li>
      <li>
        <a>
          <button className="w-full font-normal mb-4 flex items-center gap-3">
            <FaTaxi color="orange" size={24} />
            Taxi
          </button>
        </a>
      </li>
      <li>
        <a>
          <button className="w-full font-normal mb-4 flex items-center gap-3">
            <PiTShirtFill color="purple" size={24} />
            Shopping
          </button>
        </a>
      </li>
    </div>
  );
};

export default RecordIcons;
