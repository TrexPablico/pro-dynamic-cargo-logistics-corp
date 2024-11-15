import React, { useEffect, useRef } from "react";
import message from "../assets/Contact/message.png";
import email from "../assets/Contact/mail.png";
import phone from "../assets/Contact/phone.png";
import location from "../assets/Contact/location.png";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gisk89b", "template_45u1dxq", form.current, {
        publicKey: "xFX7lbU3Y_kHT7BOV",
      })
      .then(
        () => {
          toast.success("Message Sent", {
            style: {
              background: "orange",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "orange",
            },
          });
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="container mx-auto my-20 flex flex-col lg:flex-row gap-10 px-4">
      <div className="lg:w-1/2 text-gray-600">
        <h3 className="text-2xl font-medium text-blue-900 flex items-center mb-5">
          Send us a Message <img src={message} alt="" className="w-9 ml-2" />
        </h3>
        <p className="max-w-lg leading-6">
          We’d love to hear from you! Whether you’re looking for reliable
          logistics solutions or need specialized handling for your cargo, PDC
          Logistics is here to help.
          <br />
          <br />
          For potential clients, let us make your logistics needs seamless with
          our expert freight forwarding, customs clearance, and delivery
          services. Share your requirements with us, and send us a message.
        </p>
        <ul className="mt-5 space-y-5">
          <li className="flex items-center font-semibold">
            <img src={email} alt="" className="w-6 mr-3" />
            prodynamic.cargologistics@gmail.com / pdclogisticscorp@gmail.com
          </li>
          <li className="flex items-center font-semibold">
            <img src={phone} alt="" className="w-6 mr-3" />
            Globe: +639157825448 / Smart : +639690645817
          </li>
          <li className="flex items-center font-semibold">
            <img src={location} alt="" className="w-6 mr-3" />
            65 Kagawad Road, Batasan Hills, Quezon City, Metro Manila,
            Philippines, 1126
          </li>
        </ul>
      </div>

      <div className="lg:w-1/2">
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-lg font-medium">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="w-full p-4 bg-indigo-100 mt-2 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Your Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="example@email.com"
              required
              className="w-full p-4 bg-indigo-100 mt-2 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              Your Message here
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              className="w-full p-4 bg-indigo-100 mt-2 rounded-lg outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Contact;
