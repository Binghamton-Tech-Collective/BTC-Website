import React from 'react';
import teamData from '../../btc_community_teams.json'; // Import the JSON data

const BTCMembers = () => {
  return (
    <div className='bg-white h-full w-full p-4'>
      {teamData.teams.map((team, index) => (
        <div key={index} className='mb-6'>
          <h2 className='text-xl font-bold mb-4'>{team.team_name}</h2>
          <ul className='list-disc pl-5'>
            {team.members.map((member, idx) => (
              <li key={idx} className='mb-2'>
                <p><strong>Name:</strong> {member.name}</p>
                <p><strong>Role:</strong> {member.role}</p>
                <p><strong>Email:</strong> {member.email}</p>
                <p><strong>Contact No:</strong> {member.contact_no}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BTCMembers;
