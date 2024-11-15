import React from "react";
import about1 from "../assets/About/about1.jpg";
import about2 from "../assets/About/about2.jpg";
import about3 from "../assets/About/about3.jpg";
import about4 from "../assets/About/about4.jpg";
import about5 from "../assets/About/about5.jpg";
import about6 from "../assets/About/about6.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto px-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-semibold mb-8 lg:mb-32 text-blue-600">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <Slider
          {...settings}
          className="w-full sm:w-1/2 max-w-lg rounded-b-none rounded-t-full overflow-hidden"
        >
          {[about1, about2, about3, about4, about5, about6].map(
            (image, index) => (
              <div
                key={index}
                className="flex justify-center items-center mx-auto"
              >
                <img
                  src={image}
                  alt=""
                  className=" w-[500px] h-[600px] lg:h-[600px] object-cover px-9"
                />
              </div>
            )
          )}
        </Slider>

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 px-9 mx-auto">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl mx-auto">
            <div className="mx-auto px-9">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">100k+</p>
              <p>Package Delivered</p>
            </div>
            <div className="mx-auto px-9 lg:ml-6">
              <p className="text-4xl font-medium text-gray-800">50+</p>
              <p>Countries Imported From</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20k+</p>
              <p>Happy Customers</p>
            </div>
          </div>
          <p className="my-10 max-w-lg ">
            <span className="text-blue-600 font-semibold">
              Pro Dynamic Cargo Logistics Corp.
            </span>{" "}
            is also known as “PDC Logistics” was established in 2020 and
            incorporated with the aim to meet the requirements of different firm
            with the view to perform the role of service to the logistics
            department and complete customer service for transportation &
            forwarding solutions for both international and domestic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
