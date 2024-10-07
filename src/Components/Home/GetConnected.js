import React from "react";
import { Link } from "react-router-dom";

const GetConnected = () => {
  return (
    <div className="h-screen flex flex-col justify-start">
      <div className="bg-custom-green relative flex md:flex-row">
        <div className="md:h-80 h-60">
          <img
            src="/btc_background.png"
            alt="BTC Background"
            className="justify-start"
          ></img>
        </div>
        <div className="py-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white text-left md:text-center">
            Get Connected!
          </h1>
          <p className="text-white mb-6 text-base md:text-lg">
            Welcome to the Binghamton Tech Collective, a community of tech
            enthusiasts, developers, and innovators. We are dedicated to
            fostering a collaborative environment where individuals can learn,
            grow, and contribute to the tech community. Our mission is to create
            innovative products that positively impact the students at
            Binghamton University.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="/join"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 text-base md:text-lg rounded-md"
            >
              Join Now→
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetConnected;
