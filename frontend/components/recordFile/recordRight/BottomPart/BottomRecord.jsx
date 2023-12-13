import React from "react";
import DataChange, { DataChangeFood } from "./DataChange";

const BottomRecord = () => {
  return (
    <>
      <div>
        <h1 className="my-4 font-semibold">Today</h1>
        <DataChange />
        <DataChangeFood />
        <DataChangeFood />
        <DataChangeFood />
        <DataChangeFood />
      </div>
      <div>
        <h1 className="my-4 font-semibold">Yesterday</h1>
        <DataChangeFood />
        <DataChangeFood />
        <DataChangeFood />
        <DataChangeFood />
        <DataChangeFood />
        <DataChangeFood />
      </div>
    </>
  );
};

export default BottomRecord;
