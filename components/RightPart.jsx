import React from "react";

export const RightPart = ({ location, origin }) => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-20 w-1/3">
      <div>
        <span className="text-green-600 font-semibold">Location: </span>
        <span>{location}</span>
      </div>
      <div>
        <span className="text-green-600 font-semibold">Origin: </span>
        <span>{origin}</span>
      </div>
    </div>
  );
};
