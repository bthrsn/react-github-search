import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 bg-slate-400 shadow-md text-white text-lg">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <Link to="/" className="mr-5">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
    </nav>
  );
};

