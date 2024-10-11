import React from "react";
import { Link } from "react-router-dom";
import GetConnected from "./GetConnected.js";

const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="py-4 pt-16 relative bg-custom-green">
          <img
            src="/btc_logo.png"
            alt="BTC Logo"
            className="w-full object-center justify-start h-80 z-0 inset-0 top-10 md:absolute"
          />
          <img
            src="/btc_element.png"
            alt="BTC Element Logo"
            className="w-full justify-start z-10 relative"
          ></img>
        </div>
        <div className="py-8 bg-white relative">
          <img
            src="/about_us_img.png"
            alt="BTC Background"
            className="absolute inset-0 top-0 md:h-80 sm:h-40 md:top-8 object-cover z-0"
          ></img>
          <div className="container mx-auto px-4 flex flex-col md:flex-row relative">
            <div className="w-full md:w-3/5 md:pr-12 mb-6 md:mb-0 relative z-10">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                  About Us
                </h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg">
                  Welcome to the Binghamton Tech Collective, a community of tech
                  enthusiasts, developers, and innovators. We are dedicated to
                  fostering a collaborative environment where individuals can
                  learn, grow, and contribute to the tech community. Our mission
                  is to create innovative products that positively impact the
                  students at Binghamton University.
                </p>
                <Link
                  to="/join"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 text-base md:text-lg inline-flex items-center rounded-md"
                >
                  Join Now→
                </Link>
              </div>
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
        <div className="bg-custom-green flex flex-row">
          <iframe
            title="survey"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdr1Tt2jMud5i1TzNTh6p_GyAGLtadtrD3eIy-nkBGNFxseUQ/viewform?embedded=true"
            width="100%"
            height="850"
            style={{ border: "none", margin: 0, padding: 0 }}
          >
            Loading…
          </iframe>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row py-8 bg-white">
          <div className="w-full md:w-2/5 md:pr-8">
            <img
              src="/btc_team.jpg"
              alt="Our Team"
              className="shadow-lg w-full h-auto ml-auto"
            />
          </div>
          <div className="w-full md:w-3/5 md:pl-6 mb-6 md:mb-0 relative">
            <div className="relative py-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Our Projects
              </h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                Welcome to the Binghamton Tech Collective, a community of tech
                enthusiasts, developers, and innovators. We are dedicated to
                fostering a collaborative environment where individuals can
                learn, grow, and contribute to the tech community. Our mission
                is to create innovative products that positively impact the
                students at Binghamton University.
              </p>
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 text-base md:text-lg inline-flex items-center rounded-md"
              >
                Try it Now→
              </Link>
            </div>
          </div>
        </div>
        <GetConnected />
      </div>
    </>
  );
};

export default Home;
