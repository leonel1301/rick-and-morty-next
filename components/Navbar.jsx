import Link from "next/link";
import React from "react";
import { Search } from "./Search";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#5EC465]">
      <header>
        <nav className="px-4">
          <ul className="flex justify-between">
            <Link href={`/`}>
              <li className="right right m-3">
                <img
                  src="/rickandmorty.jpg"
                  width={"250px"}
                  alt="Rick And Morty"
                />
              </li>
            </Link>
            <div className="flex">
              <Search/>
              <img className="ml-6" src="/portal.gif" width={"70px"} />
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
