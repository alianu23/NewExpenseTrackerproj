import React, { useState } from "react";
import RecordForm from "./addRecordForm";
import CategoryForm from "./addCategoryForm";

const index = () => {
  const [jump, setJump] = useState(1);

  const next = () => {
    setJump(jump + 1);
  };
  return (
    <div>
      {next === 1 && <RecordForm />}
      {next === 2 && <CategoryForm />}
    </div>
  );
};

export default index;
