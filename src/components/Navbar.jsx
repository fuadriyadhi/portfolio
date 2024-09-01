import React, { useState, useRef, useEffect } from "react";
import brandName from "../assets/fuad.svg";
import AnimatedHamburgerButton from "./magicui/AnimatedHamburgerButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar w-full h-[70px] fixed top-0 left-0 z-[100]">
      <div className="navbar_wrapper flex justify-evenly items-center h-[70px]">
        <img src={brandName} alt="brandName" className="brand h-[30px]" />

        {/* Hamburger button for small screens */}
        <div className="lg:hidden" ref={buttonRef}>
          <AnimatedHamburgerButton active={isOpen} onClick={toggleMenu} />
        </div>

        {/* Menu items */}
        <menu
          ref={menuRef}
          className={`navbar_menu flex flex-col items-center gap-8 text-[13px] absolute top-[70px] left-0 w-full bg-transparent shadow-sm p-4 transition-all duration-300 ease-in-out lg:relative lg:flex-row lg:bg-transparent lg:shadow-none lg:top-0 lg:w-auto lg:p-0 ${
            isOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <a href="#" className="hover:text-blue-500">
            home
          </a>
          <a href="#about" className="hover:text-blue-500">
            about
          </a>
          <a href="#works" className="hover:text-blue-500">
            works
          </a>
          <a href="#skill" className="hover:text-blue-500">
            skill
          </a>
          <a href="#contact" className="hover:text-blue-500">
            contact
          </a>
        </menu>
      </div>
    </nav>
  );
}
