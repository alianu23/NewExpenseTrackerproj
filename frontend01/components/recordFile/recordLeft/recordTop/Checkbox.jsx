import React from "react";

const Checkbox = ({ name, selectedType, onSelectType }) => {
  return (
    <div className="flex my-5 gap-2">
      <input
        type="checkbox"
        checked={!selectedType.includes(name) && "checked"}
        onChange={() => {
          onSelectType(name);
        }}
        className="checkbox ml-3"
      />
      <p>{name}</p>
    </div>
  );
};

export default Checkbox;
