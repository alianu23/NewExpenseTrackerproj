import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";

import { PiForkKnifeFill, PiTShirtFill } from "react-icons/pi";

export const getIcons = (iconName, iconColor) => {
  const icons = {
    gift: <FaGift size={30} color={iconColor} />,
    home: <FaHome size={30} color={iconColor} />,
    taxi: <FaTaxi size={30} color={iconColor} />,
    food: <PiForkKnifeFill size={30} color={iconColor} />,
    drink: <FaWineGlassAlt size={30} color={iconColor} />,
    shopping: <PiTShirtFill size={30} color={iconColor} />,
  };
  return icons[iconName];
};
