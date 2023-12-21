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
  PiQuestionFill,
  PiWatchFill,
} from "react-icons/pi";
import {
  MdChildFriendly,
  MdOutlineShoppingBag,
  MdBadge,
  MdHourglassTop,
} from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { BsGlobe, BsMenuAppFill } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";

export const getIcons = (iconName, iconColor) => {
  const icons = {
    gift: <FaGift size={30} color={iconColor} />,
    home: <FaHome size={30} color={iconColor} />,
    taxi: <FaTaxi size={30} color={iconColor} />,
    food: <PiForkKnifeFill size={30} color={iconColor} />,
    drink: <FaWineGlassAlt size={30} color={iconColor} />,
    shopping: <PiTShirtFill size={30} color={iconColor} />,
    menu: <BsMenuAppFill size={30} color={iconColor} />,
    mic: <FaMicrophone size={30} color={iconColor} />,
    calendar: <FaCalendar size={30} color={iconColor} />,
    taxi: <FaRoad size={30} color={iconColor} />,
    peace: <FaPeace size={30} color={iconColor} />,
    paper: <FaToiletPaper size={30} color={iconColor} />,
    bus: <FaBusAlt size={30} color={iconColor} />,
    airFresh: <FaAirFreshener size={30} color={iconColor} />,
    exam: <PiExamFill size={30} color={iconColor} />,
    intersect: <PiIntersectFill size={30} color={iconColor} />,
    ladder: <PiLadderFill size={30} color={iconColor} />,
    leaf: <PiLeafFill size={30} color={iconColor} />,
    seven: <PiNumberCircleSevenFill size={30} color={iconColor} />,
    five: <PiNumberFiveFill size={30} color={iconColor} />,
    orange: <PiOrangeSliceFill size={30} color={iconColor} />,
    question: <PiQuestionFill size={30} color={iconColor} />,
    watch: <PiWatchFill size={30} color={iconColor} />,
    child: <MdChildFriendly size={30} color={iconColor} />,
    bag: <MdOutlineShoppingBag size={30} color={iconColor} />,
    drone: <GiDeliveryDrone size={30} color={iconColor} />,
    badge: <MdBadge size={30} color={iconColor} />,
    hourglass: <MdHourglassTop size={30} color={iconColor} />,
    pencil: <BiPencil size={30} color={iconColor} />,
    globe: <BsGlobe size={30} color={iconColor} />,
  };
  return icons[iconName];
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
  { icon: <PiQuestionFill size={30} />, name: "question" },
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
  "bg-purple-500",
  "bg-red-500 ",
  "bg-blue-500",
  "bg-purple-600",
  "bg-green-500",
  "bg-orange-500",
];

export const formatDate = (dateStr) => {
  const dt = moment(dateStr).startOf("day").fromNow();
  return dt;
};
