import React from "react";
import { Link } from "react-router-dom";
import GetConnected from "./GetConnected.js";

const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="py-20 md:py-20 flex bg-custom-green items-center justify-center relative">
          <img
            src="/btc_logo.png"
            alt="BTC Logo"
            className="h-80 z-0 top-10 absolute"
          />
          <img
            src="/btc_element.png"
            alt="BTC Element Logo"
            className="z-10 md:w-2/4 pt-5"
          ></img>
        </div>
        <div className="py-16 bg-white relative">
          <img
            src="/about_us_img.png"
            alt="BTC Background"
            className="absolute inset-0 top-10 md:h-80 h-60 md:top-24 z-0 inline-block"
          ></img>
          <div className="container mx-auto px-4 flex flex-col md:flex-row relative">
            <div className="w-full md:w-3/5 md:pr-12 relative z-10">
              <div className="relative md:p-8 pl-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black md:inline-block">
                  About Us
                </h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg  md:inline-block">
                  Welcome to the Binghamton Tech Collective, a community of tech
                  enthusiasts, developers, and innovators. We are dedicated to
                  fostering a collaborative environment where individuals can
                  learn, grow, and contribute to the tech community. Our mission
                  is to create innovative products that positively impact the
                  students at Binghamton University.
                </p>
                <Link
                  to="/join"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 text-base md:text-lg inline-flex items-center rounded-md md:inline-block md:px-4"
                >
                  Join Now→
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/5 md:pl-8 pt-8">
              <img
                src="/btc_team.jpg"
                alt="Our Team"
                className="w-11/12 h-auto inline-block pl-4"
              />
            </div>
          </div>
        </div>
        <div className="bg-custom-green relative md:min-h-full min-h-full md:p-6 p-6">
          <iframe
            title="survey"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdr1Tt2jMud5i1TzNTh6p_GyAGLtadtrD3eIy-nkBGNFxseUQ/viewform?embedded=true"
            width="100%"
            className="inline-block md:h-full h-full"
          >
            Loading…
          </iframe>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row py-8 bg-white">
          <div className="w-full md:w-2/5 md:pl-8 md:py-8">
            <img
              src="/btc_team.jpg"
              alt="Our Team"
              className="w-11/12 h-auto inline-block pl-4 pt-5"
            />
          </div>
          <div className="w-full md:w-3/5 md:pl-6 mb-6 md:mb-0 relative">
            <div className="relative md:p-8 pl-4 pt-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black md:inline-block">
                Our Projects
              </h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg  md:inline-block">
                Welcome to the Binghamton Tech Collective, a community of tech
                enthusiasts, developers, and innovators. We are dedicated to
                fostering a collaborative environment where individuals can
                learn, grow, and contribute to the tech community. Our mission
                is to create innovative products that positively impact the
                students at Binghamton University.
              </p>
              <Link
                to="/join"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 text-base md:text-lg inline-flex items-center rounded-md md:inline-block md:px-4"
              >
                Join Now→
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
