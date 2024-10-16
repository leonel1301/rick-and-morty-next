import React from "react";

export const LeftPart = ({status, species, gender}) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-20 w-1/3">
      <div>
        <span className="text-green-600 font-semibold">Status: </span>
        <span>{status}</span>
      </div>
      <div>
        <span className="text-green-600 font-semibold">Species: </span>
        <span>{species}</span>
      </div>
      <div>
        <span className="text-green-600 font-semibold">Gender: </span>
        <span>{gender}</span>
      </div>
    </div>
  );
};
