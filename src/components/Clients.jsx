import React from "react";
import client1 from "../assets/Clients/1.png";
import client2 from "../assets/Clients/2.png";
import client3 from "../assets/Clients/3.png";
import client4 from "../assets/Clients/4.png";
import client5 from "../assets/Clients/5.png";
import client6 from "../assets/Clients/6.png";
import client7 from "../assets/Clients/7.png";
import client8 from "../assets/Clients/8.png";

const Clients = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center gap-16 lg:mt-33 mt-20 lg:px-80 p-6 relative z-[-1] bg-gray-200">
        <div className="flex flex-col gap-3 z-[-1]">
          <div className="flex items-center gap-2"></div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl font-semibold text-blue-600 ">
              Brand Partners
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full bg-gray-100 z-[-1]">
        <section className="w-full flex flex-wrap justify-around gap-6 sm:gap-8 md:gap-12 lg:gap-[45px] px-2 py-24 bg-gray-200 min-h-[500px]">
          <img
            src={client1}
            alt="1"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={client2}
            alt="2"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={client3}
            alt="3"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={client4}
            alt="4"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={client5}
            alt="5"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={client6}
            alt="6"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={client7}
            alt="7"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={client8}
            alt="7"
            className="w-[270px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[600px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
        </section>
      </div>
    </div>
  );
};

export default Clients;
