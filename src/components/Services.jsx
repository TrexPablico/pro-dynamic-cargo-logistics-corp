import React from "react";
import { motion } from "framer-motion";
import service1 from "../assets/Services/1.png";
import service2 from "../assets/Services/2.png";
import service3 from "../assets/Services/3.png";
import service4 from "../assets/Services/4.png";
import service5 from "../assets/Services/5.png";
import service6 from "../assets/Services/6.png";

const ServicesData = [
  {
    id: 1,
    title: "International Freight Forwarding",
    link: "#",
    icon: service1,
    delay: 0.2,
  },
  {
    id: 2,
    title:
      "Customs Clearance Processing & Releasing for FCL/LCL (by Air & Sea)",
    link: "#",
    icon: service2,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Domestic Freight Forwarding",
    link: "#",
    icon: service3,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Trucking & Delivery Services",
    link: "#",
    icon: service4,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Door-to-Door Delivery",
    link: "#",
    icon: service5,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Import & Export Accreditation",
    link: "#",
    icon: service6,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16 mx-auto">
        <h1 className="text-blue-600 text-4xl font-bold pb-10 text-center">
          Services we offer
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
