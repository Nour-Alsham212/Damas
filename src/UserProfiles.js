import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './index.css';

const UserProfiles = () => {
  const profiles = [
    { name: 'Leila', description: 'Learning' },
    { name: 'Ahmad', description: 'Loves' },
    { name: 'Sara', description: 'Traveling' },
    { name: 'Farid', description: 'Exploring' },
    { name: 'Nadia', description: 'Teaching'},
    { name: 'Dawood', description: 'History'},
    // Add more users here...
  ];

  return (
    <div className="user-profiles-page">
      <h1>User Profiles</h1>
      <div className="user-profiles-container">
        {profiles.map((profile, index) => (
          <div key={index} className="user-profile-card">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <h2>Name: {profile.name}</h2>
            <p>Description: {profile.description}</p>
            <button className="profile-button" data-tooltip-id={`follow-tooltip-${index}`}>
              <FontAwesomeIcon icon={faPlusCircle} /> Follow
            </button>
            <Tooltip id={`follow-tooltip-${index}`} place="top" effect="solid">
              Follow this user
            </Tooltip>
            <button className="profile-button" data-tooltip-id={`edit-tooltip-${index}`}>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <Tooltip id={`edit-tooltip-${index}`} place="top" effect="solid">
              Edit this profile
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfiles;
