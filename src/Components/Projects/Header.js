import React from "react";

const ProjectHeader = () => {
  return (
    <div className="bg-custom-green">
      <div>
        <img
          src="/btc_element.png"
          alt="BTC Element Logo"
          className="pt-20 z-0 absolute md:pt-20 lg:w-full lg:pt-0 lg:h-96 xl:h-80"
        ></img>
      </div>
      <div className="z-10 inset-0 flex flex-col px-5 py-20 md:px-5 lg:px-10">
        <h2 className="text-white font-bold text-2xl py-3 md:text-4xl md:text-center md:py-5 lg:text-6xl">
          Our Projects
        </h2>
        <p className="text-white text-md md:text-lg lg:text-2xl">
          Coming Soon...
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;
