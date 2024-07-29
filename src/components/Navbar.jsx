import React from "react";
import { Link } from "react-router-dom";
import brandName from "../assets/fuad.svg";

export default function Navbar() {
  return (
    <nav className="navbar w-full h-[70px] fixed top-0 left-0 z-[100]">
      <div className="navbar_wrapper flex justify-evenly items-center h-[70px]">
        <img src={brandName} alt="branName" className="brand h-[30px]" />
        <menu className="navbar_menu flex gap-4 text-[13px]">
          <a href="#">home</a>
          <a href="#about">about</a>
          <a href="#works">works</a>
          <a href="#skill">skill</a>
          <a href="#contact">contact</a>
        </menu>
      </div>
    </nav>
  );
}
