import React from "react";
import moment from "moment";
import { getCurrencySymbol, getIcons, thousandify } from "@/utils";

const Bottom = ({ transaction }) => {
  return (
    <div className="border-b-2 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <div
          className={`rounded-full p-2 ml-4`}
          style={{ backgroundColor: transaction.category_color }}
        >
          {getIcons(transaction?.category_img, "white")}
        </div>

        <div className="ml-3">
          <h2 className="font-medium">{transaction.name}</h2>
          <h3 className="text-gray-500 text-xs">
            {moment(transaction.updated_at).format("MMM Do YY")}
          </h3>
        </div>
      </div>

      <h4
        className={`${
          transaction.transaction_type === "EXP"
            ? "text-red-500 "
            : "text-lime-500 "
        } font-medium mr-4`}
      >
        {transaction.transaction_type === "EXP" ? "-" : "+"}
        {thousandify(transaction.amount)}
        {getCurrencySymbol(transaction.currency_type)}
      </h4>
    </div>
  );
};
export default Bottom;

// text-lime-500