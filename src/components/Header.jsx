import React from "react";
import Navbar from "./Navbar";
import cargo from "../assets/Header/cargo.png";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img2.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container flex flex-col items-center justify-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white mt-[-150px] text-center">
        <img
          src={cargo}
          alt=""
          className="h-[150px] lg:h-[400px] lg:w-[950px] w-[650px] object-cover"
        />
        <div className="space-x-6 mt-6">
          <a
            href="#Services"
            className="border bg-blue-700 border-white hover:bg-blue-400 px-8 py-3 rounded"
          >
            Services
          </a>
          <a
            href="#Contact"
            className="bg-blue-700 px-8 py-3 rounded hover:bg-blue-400"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
