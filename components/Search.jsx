"use client";
import { setSearchName } from "@/redux/slices/characterSlice";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";

export const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setName(value);
    console.log(name);
    dispatch(setSearchName(value));
  };

  return (
    <div className="flex ">
      <input
        className="border-black border-2 rounded-lg my-5 mx-2 p-[1px] px-2"
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      ></input>
      <button>
        <FaSearch/>
      </button>
    </div>
  );
};
