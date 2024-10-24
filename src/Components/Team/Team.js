import React from 'react';
import { teamData } from '../../data/team.js'; // Importing the structured team data


const Team = () => {
  return (
    <div className="bg-custom-green mt-10">
      {/* Header Section */}
      <div
  className="text-white text-left py-20 max-w-5xl mx-auto bg-cover bg-center"

>
  <h1 className="text-6xl font-bold">Meet the Teams</h1>
  <p className="mt-4 text-l text-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>

      {/* Team Sections */}
      {Object.keys(teamData).map((teamKey, index) => (
        <div className="bg-gray-100 py-8" key={index}>
          <h2 className="text-4xl text-center font-bold mb-12">{teamKey}</h2>
          <div className="flex flex-wrap justify-center px-40 mb-12">
            {/* Render Team Leads */}
            {teamData[teamKey].lead.map((lead, idx) => (
              <div key={idx} className="text-center mx-10">
                <img
                  src={lead.image || 'https://via.placeholder.com/150'}
                  alt={`${lead.name}`}
                  className="rounded-full mt-4 w-24 h-24 mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{lead.name}</h3>
                <p className="text-gray-600">{lead.position}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center px-40">
            {/* Render Team Members */}
            {teamData[teamKey].members.map((member, idx) => (
              <div key={idx} className="text-center py-3 mx-10">
                <img
                  src={member.image || 'https://via.placeholder.com/150'}
                  alt={`${member.name}`}
                  className="rounded-full mt-4 w-24 h-24 mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="text-white text-center py-20 max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold">Join us</h1>
        <p className="mt-4 text-l text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

  );
};

export default Team;