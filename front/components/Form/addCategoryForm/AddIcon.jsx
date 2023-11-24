import { useState } from "react";

import CategoryIcons from "./CategoryIcons";
import { DashArrow } from "@/components/iconsvg";
import { MdHomeFilled } from "react-icons/md";

const AddIcon = () => {
  const [IsColor, setIsColor] = useState("Black");

  return (
    <div>
      {" "}
      <details className="dropdown">
        <summary className="m-1 btn">
          <div className="flex items-center gap-7">
            <MdHomeFilled size={24} />
            <DashArrow size={15} />
          </div>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96">
          <CategoryIcons IsColor={IsColor} setIsColor={setIsColor} />
        </ul>
      </details>
    </div>
  );
};

export default AddIcon;
