import React from "react";

const MainContent = () => {
  return (
    <div className="flex flex-col bg-white relative">
      <div className="md:flex md:flex-col">
        <img
          src="/about_us_img.png"
          alt="BTC Background"
          className="absolute z-0 top-16 h-48 md:h-72 md:top-12"
        ></img>
        <div className="md:flex md:flex-row md:relative">
          <div className="relative md:relative md:w-2/5">
            <h2 className="z-10 text-3xl font-bold mb-4 text-black pt-5 translate-x-5 md:text-4xl">
              Shop Bing
            </h2>
            <span className="inline-block z-10 text-gray-700 mb-4 translate-x-5 md:text-lg">
              Coming Soon...
            </span>
          </div>
          <div className="relative flex flex-col z-10 items-center md:flex-row md:justify-end md:w-4/5 md:translate-y-7 md:ml-auto lg:justify-end lg:translate-y-10 lg:w-full">
            <img
              src="/shop_bing_signup_page.jpg"
              alt="Sign Up"
              className="w-full max-w-sm max-h-96 object-contain md:max-w-sm"
            />
            <img
              src="/shop_bing_home_page.jpg"
              alt="Home Page"
              className="w-full max-w-xs max-h-96 object-contain translate-y-5 md:translate-y-0 md:max-w-sm"
            />
          </div>
        </div>

        <div className="relative top-10 flex flex-row translate-x-5 md:flex md:flex-row md:w-full">
          <h2 className="text-lg font-bold mb-4 text-black md:text-2xl">
            Now available on
          </h2>
          <img
            src="/android_icon.png"
            alt="Android Icon"
            className="pl-5 h-7 md:pl-10 md:h-10"
          />
        </div>
        <div className="relative top-10 translate-x-5 md:flex md:flex-row md:translate-y-5">
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
      </div>

      <div className="relative top-10 md:flex md:flex-row">
        <div className="md:w-1/2 lg:w-2/5">
          <img
            src="/btc_team.jpg"
            alt="Our Team"
            className="w-10/12 translate-x-5 h-auto md:min-w-96 md:top-10 md:relative md:h-auto md:pr-5"
          />
        </div>
        <div className="z-10 relative translate-x-5 md:flex md:flex-col md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-black pt-5 md:text-4xl">
            Study Buddy
          </h2>
          <span className="text-gray-700 mb-4 text-md md:text-lg">
            Coming Soon...
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
        <div className="md:relative md:flex md:flex-col">
          <img
            src="/project_page_img.png"
            alt="BTC Background"
            className="absolute z-0 top-28 h-32 md:translate-y-24 md:top-0"
          ></img>
          <div className="relative z-10 top-5 py-10 px-5 md:flex md:flex-col md:py-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Coming Soon...
            </h2>
            <span className="text-gray-700 mb-6 text-base md:text-lg">
              Coming Soon...
            </span>
          </div>
        </div>
        <div className="relative translate-x-5 py-7 md:flex md:flex-row md:top-10">
          <a
            href="https://forms.gle/pBBHpkyhzNngqZ627"
            target="_blank"
            rel="noOpener noReferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white mr-4 mb-8 px-4 py-2 text-sm inline-flex items-center rounded-md w-42 translate-y-12 md:translate-y-0 lg:translate-y-0 md:py-3 md:px-6 md:text-lg"
          >
            What do you want to see next? →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
