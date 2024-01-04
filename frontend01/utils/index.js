import moment from "moment";
import {
  FaHome,
  FaGift,
  FaTaxi,
  FaWineGlassAlt,
  FaMicrophone,
  FaCalendar,
  FaRoad,
  FaPeace,
  FaToiletPaper,
  FaBusAlt,
  FaAirFreshener,
} from "react-icons/fa";
import {
  PiForkKnifeFill,
  PiTShirtFill,
  PiExamFill,
  PiIntersectFill,
  PiLadderFill,
  PiLeafFill,
  PiNumberCircleSevenFill,
  PiNumberFiveFill,
  PiOrangeSliceFill,
  PiWatchFill,
} from "react-icons/pi";
import {
  MdChildFriendly,
  MdOutlineShoppingBag,
  MdBadge,
  MdHourglassTop,
  MdAttachMoney,
} from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { BsGlobe, BsMenuAppFill } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";

export const getIcons = (iconName = "Home", iconColor = "Blue") => {
  const icons = [
    { icon: <FaGift size={30} color={iconColor} />, name: "gift" },
    { icon: <FaHome size={30} color={iconColor} />, name: "home" },
    { icon: <FaTaxi size={30} color={iconColor} />, name: "taxi" },
    { icon: <PiForkKnifeFill size={30} color={iconColor} />, name: "food" },
    { icon: <FaWineGlassAlt size={30} color={iconColor} />, name: "drink" },
    { icon: <PiTShirtFill size={30} color={iconColor} />, name: "shopping" },
    { icon: <BsMenuAppFill size={30} color={iconColor} />, name: "menu" },
    { icon: <FaMicrophone size={30} color={iconColor} />, name: "mic" },
    { icon: <FaCalendar size={30} color={iconColor} />, name: "calendar" },
    { icon: <FaRoad size={30} color={iconColor} />, name: "road" },
    { icon: <FaPeace size={30} color={iconColor} />, name: "peace" },
    { icon: <FaToiletPaper size={30} color={iconColor} />, name: "paper" },
    { icon: <FaBusAlt size={30} color={iconColor} />, name: "bus" },
    { icon: <FaAirFreshener size={30} color={iconColor} />, name: "airFresh" },
    { icon: <PiExamFill size={30} color={iconColor} />, name: "exam" },
    {
      icon: <PiIntersectFill size={30} color={iconColor} />,
      name: "intersect",
    },
    { icon: <PiLadderFill size={30} color={iconColor} />, name: "ladder" },
    { icon: <PiLeafFill size={30} color={iconColor} />, name: "leaf" },
    {
      icon: <PiNumberCircleSevenFill size={30} color={iconColor} />,
      name: "seven",
    },
    { icon: <PiNumberFiveFill size={30} color={iconColor} />, name: "five" },
    { icon: <PiOrangeSliceFill size={30} color={iconColor} />, name: "orange" },
    { icon: <MdAttachMoney size={30} color={iconColor} />, name: "money" },
    { icon: <PiWatchFill size={30} color={iconColor} />, name: "watch" },
    { icon: <MdChildFriendly size={30} color={iconColor} />, name: "child" },
    { icon: <MdOutlineShoppingBag size={30} color={iconColor} />, name: "bag" },
    { icon: <GiDeliveryDrone size={30} color={iconColor} />, name: "drone" },
    { icon: <MdBadge size={30} color={iconColor} />, name: "badge" },
    { icon: <MdHourglassTop size={30} color={iconColor} />, name: "hourglass" },
    { icon: <BiPencil size={30} color={iconColor} />, name: "pencil" },
    { icon: <BsGlobe size={30} color={iconColor} />, name: "globe" },
  ];
  let selectedIcon = null;
  icons.map((icon) => {
    if (icon.name === iconName) {
      selectedIcon = icon;
    }
  });
  return selectedIcon.icon;
};

export const getCurrencySymbol = (name = "MNT") => {
  const cur = {
    USD: "$",
    EUR: "€",
    MNT: "₮",
    GBP: "£",
  };
  return cur[name];
};

//color={iconColor}

export const icons = [
  { icon: <FaGift size={30} />, name: "gift" },
  { icon: <FaHome size={30} />, name: "home" },
  { icon: <FaTaxi size={30} />, name: "taxi" },
  { icon: <PiForkKnifeFill size={30} />, name: "food" },
  { icon: <FaWineGlassAlt size={30} />, name: "drink" },
  { icon: <PiTShirtFill size={30} />, name: "shopping" },
  { icon: <BsMenuAppFill size={30} />, name: "menu" },
  { icon: <FaMicrophone size={30} />, name: "mic" },
  { icon: <FaCalendar size={30} />, name: "calendar" },
  { icon: <FaRoad size={30} />, name: "road" },
  { icon: <FaPeace size={30} />, name: "peace" },
  { icon: <FaToiletPaper size={30} />, name: "paper" },
  { icon: <FaBusAlt size={30} />, name: "bus" },
  { icon: <FaAirFreshener size={30} />, name: "airFresh" },
  { icon: <PiExamFill size={30} />, name: "exam" },
  { icon: <PiIntersectFill size={30} />, name: "intersect" },
  { icon: <PiLadderFill size={30} />, name: "ladder" },
  { icon: <PiLeafFill size={30} />, name: "leaf" },
  { icon: <PiNumberCircleSevenFill size={30} />, name: "seven" },
  { icon: <PiNumberFiveFill size={30} />, name: "five" },
  { icon: <PiOrangeSliceFill size={30} />, name: "orange" },
  { icon: <MdAttachMoney size={30} />, name: "money" },
  { icon: <PiWatchFill size={30} />, name: "watch" },
  { icon: <MdChildFriendly size={30} />, name: "child" },
  { icon: <MdOutlineShoppingBag size={30} />, name: "bag" },
  { icon: <GiDeliveryDrone size={30} />, name: "drone" },
  { icon: <MdBadge size={30} />, name: "badge" },
  { icon: <MdHourglassTop size={30} />, name: "hourglass" },
  { icon: <BiPencil size={30} />, name: "pencil" },
  { icon: <BsGlobe size={30} />, name: "globe" },
];
export const colors = [
  "#800080",
  "#FF0000",
  "#3467C5",
  "#B922B9",
  "#8DDD17",
  "#FFA500",
];

export const formatDate = (dateStr) => {
  const dt = moment(dateStr).startOf("day").fromNow();
  return dt;
};

export const thousandify = (num) => {
  return num?.toLocaleString(undefined, { maximumFractionDigits: 2 });
};
