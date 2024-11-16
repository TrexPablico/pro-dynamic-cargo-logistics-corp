import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import sample from "../assets/Gallery/samplej.jpg";

const Gallery = () => {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto text-center mt-16 py-11">
        <h1 className="font-semibold text-blue-700 text-4xl">Gallery</h1>
      </div>
      <div className="mx-auto py-16 flex justify-center">
        <img src={sample} alt="" />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Gallery;
