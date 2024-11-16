import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-7 lg:px-11 bg-transparent">
        <a href="/">
          <h1 className="font-semibold text-blue-800">
            Pro Dynamic Cargo <br />
            Logistics Corporation
          </h1>
        </a>
        <ul className="hidden md:flex gap-7 text-blue-700 font-semibold">
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About Us
          </a>
          <a href="#Services" className="cursor-pointer hover:text-gray-400">
            Services
          </a>
          <a href="/Gallery" className="cursor-pointer hover:text-gray-400">
            Gallery
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Contact Us
          </a>
        </ul>
        <button className=" text-white hidden md:block bg-blue-700 px-8 py-2 rounded-full">
          Learn More
        </button>
        <RxHamburgerMenu
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden w-7 h-9 cursor-pointer"
        />
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <IoCloseOutline
            onClick={() => setShowMobileMenu(false)}
            className="w-7 h-9"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Services"
            className="px-4 py-2 rounded-full inline-block"
          >
            Services
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Otherservice"
            className="px-4 py-2 rounded-full inline-block"
          >
            Other Services
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="/Gallery"
            className="px-4 py-2 rounded-full inline-block"
          >
            Gallery
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Officers"
            className="px-4 py-2 rounded-full inline-block"
          >
            Key Officers
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Contact"
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
