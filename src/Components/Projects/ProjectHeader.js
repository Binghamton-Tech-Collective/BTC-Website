import React from "react";
import GetConnected from "../Home/GetConnected.js";

const ProjectHeader = () => {
  return (
    <div className="h-auto">
      <div className="bg-custom-green md:relative md:py-0 py-24">
        <img
          src="/btc_element.png"
          alt="BTC Element Logo"
          className="md:w-full justify-start md:h-full object-cover"
        ></img>
        <div className="md:absolute md:inset-0 md:z-10 absolute inset-0 z-10 flex flex-col md:justify-center justify-center px-14 pb-28 md:pb-8">
          <h2 className="text-white font-bold md:text-4xl md:px-64 md:py-5 text-3xl py-5">
            Our Projects
          </h2>
          <p className="text-white md:px-64">
            Welcome to the Binghamton Tech Collective, a community of tech
            enthusiasts, developers, and innovators. We are dedicated to
            fostering a collaborative environment where individuals can learn,
            grow, and contribute to the tech community. Our mission is to create
            innovative products that positively impact the students at
            Binghamton University.
          </p>
        </div>
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
                Shop Bing
              </h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                Welcome to the Binghamton Tech Collective, a community of tech
                enthusiasts, developers, and innovators. We are dedicated to
                fostering a collaborative environment where individuals can
                learn, grow, and contribute to the tech community. Our mission
                is to create innovative products that positively impact the
                students at Binghamton University.
              </p>
              <div className="md:flex md:flex-row md:justify-end flex flex-row justify-end">
                <img
                  src="/android_icon.png"
                  alt="Android Icon"
                  className="md:h-12 h-10"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Now available on...
              </h2>
              <div className="flex md:flex-row flex-col h-full md:space-x-8 md:space-y-0 space-y-5">
                <a
                  href="https://forms.gle/pBBHpkyhzNngqZ627"
                  target="_blank"
                  rel="noOpener noReferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 text-base md:text-lg inline-flex items-center rounded-md md:w-56 w-48"
                >
                  What do you think? →
                </a>
                <a
                  href="https://shopbing.bingtechcollective.com/login?redirect=/products"
                  target="_blank"
                  rel="noOpener noReferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 text-base md:text-lg inline-flex items-center rounded-md md:w-40 w-36"
                >
                  Try it Now →
                </a>
              </div>
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
        <div className="container mx-auto px-4 flex flex-col md:flex-row py-8 bg-white md:pt-28">
          <div className="w-full md:w-2/5 md:pr-8">
            <img
              src="/btc_team.jpg"
              alt="Our Team"
              className="shadow-lg w-full h-auto ml-auto"
            />
          </div>
          <div className="w-full md:w-3/5 md:pl-6 mb-6 md:mb-0 relative">
            <div className="relative py-4 md:py-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Study Buddy
              </h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                Welcome to the Binghamton Tech Collective, a community of tech
                enthusiasts, developers, and innovators. We are dedicated to
                fostering a collaborative environment where individuals can
                learn, grow, and contribute to the tech community. Our mission
                is to create innovative products that positively impact the
                students at Binghamton University.
              </p>
              <a
                  href="https://forms.gle/xyGD12Ggo8UU4wuQ7"
                  target="_blank"
                  rel="noOpener noReferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 text-base md:text-lg inline-flex items-center rounded-md md:w-56 w-48"
                >
                  What do you think? →
                </a>
            </div>
          </div>
        </div>
        <div className="py-8 bg-white relative">
          <img
            src="/project_page_img.png"
            alt="BTC Background"
            className="absolute inset-0 top-0 md:h-80 sm:h-40 md:top-8 object-cover z-0"
          ></img>
          <div className="px-4 flex md:flex-row relative md:pl-20">
            <div className="w-full md:w-full md:pr-12 mb-6 md:mb-0 relative z-10">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                  Coming Soon...
                </h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg">
                  Welcome to the Binghamton Tech Collective, a community of tech
                  enthusiasts, developers, and innovators. We are dedicated to
                  fostering a collaborative environment where individuals can
                  learn, grow, and contribute to the tech community. Our mission
                  is to create innovative products that positively impact the
                  students at Binghamton University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetConnected />
    </div>
  );
};

export default ProjectHeader;
