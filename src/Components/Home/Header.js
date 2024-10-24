import React from "react";

const Home = () => {
  return (
    <div className="bg-custom-green">
      <div>
        <img
          src="/btc_element.png"
          alt="BTC Element Logo"
          className="pt-24 z-0 absolute md:pt-16 lg:w-full lg:pt-5 lg:h-auto xl:h-80"
        ></img>
        <img 
          src="/btc_logo.png"
          alt="BTC Header Logo"
          className="pt-16 z-10 mx-auto h-64 min-w-44 md:h-80"
        ></img>
      </div>
    </div>
  );
};

export default Home;
