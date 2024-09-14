
import React from "react";

const MyComponent = () => {
  return (
    <div className="grid h-80 grid-cols-5 gap-2  grid-rows-3">
      <div className=" col-span-2 row-span-2 bg-blue-500"/>
      <div className="col-span-3 row-span-1 bg-red-500"/>
      <div className="col-span-1 row-span-2 bg-yellow-500"/>
      <div className="col-span-2 row-span-2 bg-green-500"/>
      <div className="col-span-1 row-span-1 bg-cyan-500"/>
      <div className="col-span-1 row-span-1 bg-purple-500"/>
    </div>
  );
};

export default MyComponent;
