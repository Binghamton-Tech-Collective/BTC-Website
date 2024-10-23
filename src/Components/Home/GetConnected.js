import React from "react";
import { Link } from "react-router-dom";

const GetConnected = () => {
  return (
    <div className="bg-custom-green flex flex-row sm:pt-20 pt-0">
      <div className="pt-10 z-0 absolute md:relative md:pt-0">
        <img
          src="/btc_background.png"
          alt="BTC Background"
          className="h-52 min-w-40 justify-start md:h-60 md:w-96"
        ></img>
      </div>
      <div className="py-7 px-5 z-10">
        <h1 className="text-2xl mb-4 font-bold text-white text-left md:text-4xl md:text-center lg:text-5xl">
          Get Connected!
        </h1>
        <span className="text-white text-sm md:text-lg lg:text-2xl">
          Welcome to the Binghamton Tech Collective, a community of tech
          enthusiasts, developers, and innovators. We are dedicated to
          fostering a collaborative environment where individuals can learn,
          grow, and contribute to the tech community. Our mission is to create
          innovative products that positively impact the students at
          Binghamton University.
        </span>
        <div className="flex justify-center items-center pt-10 md:pb-5">
        <Link
          to="/join"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 text-base rounded-md md:py-3 md:px-6 md:text-lg"
        >
          Join Now→
        </Link>
      </div>
      </div>
    </div>
  );
};

export default GetConnected;
