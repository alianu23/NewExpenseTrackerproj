import { useEffect, useState } from "react";

import CategoryIcons from "./CategoryIcons";
import { DashArrow } from "@/components/iconsvg";
import { MdHomeFilled } from "react-icons/md";

const AddIcon = () => {
  const [IsColor, setIsColor] = useState("Black");
  const [colored, setColored] = useState(<MdHomeFilled size={30} />);

  useEffect(() => {}, [colored]);

  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">
          <div className="flex items-center gap-7">
            <span> {colored} </span>
            <DashArrow size={15} />
          </div>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96">
          <CategoryIcons
            colored={colored}
            setColored={setColored}
            IsColor={IsColor}
            setIsColor={setIsColor}
          />
        </ul>
      </details>
    </div>
  );
};

export default AddIcon;
