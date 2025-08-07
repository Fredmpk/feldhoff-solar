"use client";
import Link from "next/link";
import React, { useState } from "react";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden ml-auto" id="burger-menu">
      <button onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        id="myDropdown"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 mt-2 bg-white rounded-md shadow-lg py-1 z-10 w-1/3`}
      >
        <Link
          href="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Über uns
        </Link>
        <a
          href="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          (Galerie)
        </a>

        <Link
          href="/kontakt"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Kontakt
        </Link>
        {/* <a
          href="#contact"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          kontakt
        </a> */}
      </div>
    </div>
  );
}
