import React from 'react';
import { teamMembers } from '../../data/team.js'; // Importing the team data

const Team = () => {
  // Define all unique teams and their headers
  const teams = {
    'Executive Board': 'Executive Board',
    'Product Management Team': 'Product Management Team',
    'Software Engineering Team': 'Software Engineering Team',
    'UI/UX Team': 'UI/UX Team',
  };

  return (
    <div className="bg-custom-green mt-10">
      {/* Header Section */}
      <div className="text-white text-left py-40 max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold">Meet the Teams</h1>
        <p className="mt-4 text-l text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Team Sections */}
      {Object.keys(teams).map((teamKey, index) => (
        <div className="bg-gray-100 py-8" key={index}>
          <h2 className="text-4xl text-center font-bold mb-5">{teams[teamKey]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-40">
            {teamMembers
              .filter(member => member.team === teamKey)
              .map((member, idx) => (
                <div key={idx} className="text-center">
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
    </div>
  );
};

export default Team;