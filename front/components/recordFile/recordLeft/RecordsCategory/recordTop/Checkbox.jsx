import React from "react";

const Checkbox = ({ data }) => {
  return (
    <div className="flex my-5 gap-2">
      <input type="checkbox" checked="checked" className="checkbox ml-3" />
      <p>{data.name}</p>
    </div>
  );
};

export default Checkbox;
