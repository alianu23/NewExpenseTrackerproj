import React from "react";

const FormRight = () => {
  return (
    <div className="ml-5">
      {" "}
      <h1 className="mt-4 mb-2">Payee</h1>
      <select className="select select-bordered bg-[#F9FAFB] w-full max-w-xs">
        <option disabled selected>
          Choose
        </option>
        <option>Visa</option>
        <option>QPay</option>
      </select>
      <div>
        <h1 className="mt-4 mb-2">Note</h1>
        <textarea
          placeholder="Write a Message"
          cols="30"
          rows="10"
          name="message"
          className="border py-[14px] w-full pl-5 max-w-xs border-zinc-200 bg-[#F9FAFB] rounded"
        ></textarea>
      </div>
    </div>
  );
};

export default FormRight;
