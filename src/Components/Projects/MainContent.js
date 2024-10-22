import React from "react";

const MainContent = () => {
  return (
    <div className="flex flex-col bg-white relative">
      <div className="md:flex md:flex-row md:pl-16 md:relative">
        <img
          src="/about_us_img.png"
          alt="BTC Background"
          className="absolute z-0 inset-0 top-16 object-cover h-48 md:h-72 md:top-12"
        ></img>
        <div className="z-10 px-5 relative md:flex md:flex-col">
          <h2 className="text-3xl font-bold mb-4 text-black pt-5 md:text-4xl">
            Shop Bing
          </h2>
          <span className="text-gray-700 mb-4 text-md md:text-lg">
            Welcome to the Binghamton Tech Collective, a community of tech
            enthusiasts, developers, and innovators. We are dedicated to
            fostering a collaborative environment where individuals can learn,
            grow, and contribute to the tech community. Our mission is to create
            innovative products that positively impact the students at
            Binghamton University.
          </span>
        </div>
        <img
          src="/btc_team.jpg"
          alt="Our Team"
          className="relative top-5 w-full h-auto ml-auto px-5 md:min-w-96 md:top-10 md:h-auto md:pr-5"
        />
      </div>
      <div className="relative top-10 flex flex-row px-5 md:flex md:flex-row md:pl-16 md:py-10">
        <h2 className="text-lg font-bold mb-4 text-black md:text-2xl">
          Now available on
        </h2>
        <img
          src="/android_icon.png"
          alt="Android Icon"
          className="pl-5 h-7 md:pl-10 md:h-10"
        />
      </div>
      <div className="relative top-10 px-5 md:flex md:flex-row md:pl-16">
        <a
          href="https://forms.gle/pBBHpkyhzNngqZ627"
          target="_blank"
          rel="noOpener noReferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white mr-4 mb-8 px-4 py-2 text-sm inline-flex items-center rounded-md w-42 md:py-3 md:px-6 md:text-lg md:w-56"
        >
          What do you think? →
        </a>
        <a
          href="https://shopbing.bingtechcollective.com/login?redirect=/products"
          target="_blank"
          rel="noOpener noReferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white mb-8 py-2 px-4 text-sm inline-flex items-center rounded-md w-28 md:py-3 md:px-6 md:text-lg md:w-40"
        >
          Try it Now →
        </a>
      </div>
      <div className="relative top-10 px-5 md:pl-16 md:flex md:flex-row">
        <img
          src="/btc_team.jpg"
          alt="Our Team"
          className="w-full h-auto ml-auto md:min-w-96 md:top-10 md:relative md:h-auto md:pr-5"
        />
        <div className="z-10 relative md:flex md:flex-col">
          <h2 className="text-3xl font-bold mb-4 text-black pt-5 md:text-4xl">
            Study Buddy
          </h2>
          <span className="text-gray-700 mb-4 text-md md:text-lg">
            Welcome to the Binghamton Tech Collective, a community of tech
            enthusiasts, developers, and innovators. We are dedicated to
            fostering a collaborative environment where individuals can learn,
            grow, and contribute to the tech community. Our mission is to create
            innovative products that positively impact the students at
            Binghamton University.
          </span>
          <div className="relative top-5">
            <a
              href="https://forms.gle/xyGD12Ggo8UU4wuQ7"
              target="_blank"
              rel="noOpener noReferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white mr-4 mb-8 px-4 py-2 text-sm inline-flex items-center rounded-md w-42 md:py-3 md:px-6 md:text-lg md:w-56"
            >
              What do you think? →
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white relative">
        <div className="md:relative md:top-24">
          <img
            src="/project_page_img.png"
            alt="BTC Background"
            className="absolute z-0 inset-0 top-32 object-cover h-40 md:top-0"
          ></img>
        </div>
        <div className="relative top-5 py-10 px-5 md:flex md:flex-col md:pl-16 md:py-7">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Coming Soon...
          </h2>
          <span className="text-gray-700 mb-6 text-base md:text-lg">
            Welcome to the Binghamton Tech Collective, a community of tech
            enthusiasts, developers, and innovators. We are dedicated to
            fostering a collaborative environment where individuals can learn,
            grow, and contribute to the tech community. Our mission is to create
            innovative products that positively impact the students at
            Binghamton University.
          </span>
        </div>
      </div>
      <div className="relative px-5 py-7 md:flex md:flex-row md:pl-16 md:py-10 md:top-10">
        <a
          href="https://forms.gle/pBBHpkyhzNngqZ627"
          target="_blank"
          rel="noOpener noReferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white mr-4 mb-8 px-4 py-2 text-sm inline-flex items-center rounded-md w-42 md:py-3 md:px-6 md:text-lg"
        >
          What do you want to see next? →
        </a>
      </div>
    </div>
  );
};

export default MainContent;
