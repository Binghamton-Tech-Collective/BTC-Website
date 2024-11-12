import React from 'react';
import { teamData } from '../../data/team.js'; 

const Team = () => {
  return (
    <div className="bg-custom-green mt-10 relative">

      <img
        src="/btc_element.png"
        alt="BTC Background"
        className="absolute inset-0 top-16 h-52 z-0 inline-block md:h-60 md:top-20"
      />
      

      <div className="text-white text-left py-20 max-w-5xl mx-auto bg-cover bg-center px-4 md:px-1">
        <h1 className="text-3xl md:text-6xl font-bold">Meet the Teams</h1>
        <p className="mt-4 text-base md:text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>


      {Object.keys(teamData).map((teamKey, index) => (
        <div className="bg-gray-100 py-8" key={index}>
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-8 md:mb-12">{teamKey}</h2>
          
          <div className="flex flex-wrap justify-center px-4 md:px-20 lg:px-40 mb-8 md:mb-12">

            {teamData[teamKey].lead.map((lead, idx) => (
              <div key={idx} className="text-center mx-4 md:mx-10 mb-6 md:mb-8">
                <img
                  src={lead.image || 'https://via.placeholder.com/150'}
                  alt={`${lead.name}`}
                  className="rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold">{lead.name}</h3>
                <p className="text-gray-600">{lead.position}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center px-4 md:px-20 lg:px-40">

            {teamData[teamKey].members.map((member, idx) => (
              <div key={idx} className="text-center py-3 mx-4 md:mx-10 mb-6">
                <img
                  src={member.image || 'https://via.placeholder.com/150'}
                  alt={`${member.name}`}
                  className="rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      ))}


      <div className="text-white text-center py-20 max-w-5xl mx-auto px-4 md:px-0">
        <h1 className="text-3xl md:text-6xl font-bold">Join Us</h1>
        <p className="mt-4 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Team;