import React from "react";
import FormLeft from "./formLeft";
import FormRight from "./formRight";

const RecordForm = ({ open, closeForm }) => {
  return (
    <dialog className="modal" open={open}>
      <div className="modal-box  flex flex-col max-w-3xl shadow-2xl">
        <div className="flex justify-between border-b-2 pb-3">
          <h1>Add Record</h1>
          <button onClick={closeForm} className="hover:font-medium">
            X
          </button>
        </div>
        <div className="flex">
          <div className="flex-1">
            <FormLeft closeForm={closeForm} />
          </div>
          <div className="flex-1">
            <FormRight />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default RecordForm;
