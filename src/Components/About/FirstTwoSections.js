import React from "react";

const About = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="py-4 pt-16 relative bg-custom-green">
          <img
            src="/btc_logo.png"
            alt="BTC Logo"
            className="w-full object-center justify-start h-80"
          />
        </div>
        <div className="py-8 bg-gray-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 md:pr-12 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                About Us
              </h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                Mission Statement
                Purpose
                Values
                Goals
              </p>
            </div>
            <div className="w-full md:w-2/5 md:pl-8">
              <img
                src="/btc_team.jpg"
                alt="Our Team"
                className="shadow-lg w-full h-auto ml-auto"
              />
            </div>
          </div>
        </div>
        {/* Remaining space */}
        <div className="flex-grow"></div>
      </div>
    </>
  );
};

export default About;