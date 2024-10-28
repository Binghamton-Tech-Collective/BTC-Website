import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="flex flex-col bg-white relative">
      <div>
        <img
          src="/about_us_img.png"
          alt="BTC Background"
          className="absolute inset-0 top-16 h-52 z-0 inline-block md:h-60 md:top-20"
        ></img>

        <div className="container mx-auto px-2 relative md:flex md:flex-row">
          <div className="w-full relative z-10 md:w-3/5">
            <div className="relative pl-4 pr-4 flex flex-col pt-4 md:pb-8 md:pt-4">
              <h2 className="text-3xl font-bold text-black md:inline-block md:text-4xl md:pb-5">
                About Us
              </h2>
              <span className="text-gray-700 mb-6 text-base md:text-lg md:inline-block">
                Welcome to the Binghamton Tech Collective, a community of tech
                enthusiasts, developers, and innovators. We are dedicated to
                fostering a collaborative environment where individuals can
                learn, grow, and contribute to the tech community. Our mission
                is to create innovative products that positively impact the
                students at Binghamton University.
              </span>
              <Link
                to="/join"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4 px-4 w-28 text-base items-center rounded-md md:py-3 md:text-lg md:inline-block md:px-4 md:w-32"
              >
                Join Now→
              </Link>
            </div>
          </div>
          <div className="pt-8 relative md:top-2">
            <img
              src="/btc_team.jpg"
              alt="Our Team"
              className="w-11/12 h-auto inline-block pl-4 mb-8 md:h-96"
            />
          </div>
        </div>
      </div>
      <div className="container bg-custom-green relative min-h-96 py-5 md:p-6 md:min-h-full">
        <iframe
          title="Survey Form"
          src="https://forms.gle/CSzHup2Nx89uHv6E7"
          className="min-w-full min-h-96 md:h-full"
        >
          Loading…
        </iframe>
      </div>

      <div className="container mx-auto px-2 relative md:flex md:flex-row">
        <div className="pt-8 relative md:top-2">
          <img
            src="/btc_team.jpg"
            alt="Our Team"
            className="w-11/12 h-auto inline-block pl-4  mb-8 md:h-96"
          />
        </div>
        <div className="w-full relative z-10 md:w-3/5">
          <div className="relative pl-4 pr-4 flex flex-col pt-4 md:pb-8 md:pt-4">
            <h2 className="text-3xl font-bold text-black md:inline-block md:text-4xl md:pb-5">
              Our Projects
            </h2>
            <span className="text-gray-700 mb-6 text-base md:text-lg md:inline-block">
              Coming Soon...
            </span>
            <Link
              to="/join"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4 px-4 w-28 text-base items-center rounded-md mb-5 md:py-3 md:text-lg md:inline-block md:px-4 md:w-32"
            >
              Join Now→
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
