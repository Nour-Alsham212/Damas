import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faUserCircle, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './index.css';

const Forum = () => {
  const threads = [
    {
      id: 1,
      title: 'Introduce Yourself',
      description: 'Share a bit about yourself with the community.',
      icon: faUserCircle,
    },
    {
      id: 2,
      title: 'Favorite Arabic Phrases',
      description: 'Discuss your favorite Arabic phrases and their meanings.',
      icon: faClipboardList,
    },
    {
      id: 3,
      title: 'Cultural Experiences',
      description: 'Share your cultural experiences and learn from others.',
      icon: faUserCircle,
    },
  ];

  return (
    <div className="forum-page">
      <h1>Forum: General Discussion</h1>
      <div className="forum-container">
        {threads.map((thread) => (
          <div key={thread.id} className="forum-thread">
            <FontAwesomeIcon icon={thread.icon} className="forum-icon" />
            <h2>{thread.title}</h2>
            <p>{thread.description}</p>
            <button data-tooltip-id={`view-thread-tooltip-${thread.id}`}>
              <FontAwesomeIcon icon={faEye} /> View Thread
            </button>
            <Tooltip id={`view-thread-tooltip-${thread.id}`} place="top" effect="solid">
              View this thread
            </Tooltip>
          </div>
        ))}
        <button className="create-thread" data-tooltip-id="create-thread-tooltip">
          <FontAwesomeIcon icon={faPlus} /> Create New Thread
        </button>
        <Tooltip id="create-thread-tooltip" place="top" effect="solid">
          Create a new discussion thread
        </Tooltip>
      </div>
    </div>
  );
};

export default Forum;
