import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUserFriends, faUsers, faEdit, faUserPlus, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './index.css';

const Community = () => {
  return (
    <div className="community-page">
      <h1>Community</h1>
      <div className="community-container">
        <div className="chat-section">
          <h2><FontAwesomeIcon icon={faComments} /> Chat</h2>
          <div className="chat-item">
            <h3><FontAwesomeIcon icon={faUserFriends} /> Beginner Chat</h3>
            <button className="join-btn" data-tooltip-id="beginner-chat-tooltip">Join</button>
            <Tooltip id="beginner-chat-tooltip" place="top" effect="solid">
              Join the Beginner Chat
            </Tooltip>
          </div>
          <div className="chat-item">
            <h3><FontAwesomeIcon icon={faUsers} /> Advanced Discussions</h3>
            <button className="join-btn" data-tooltip-id="advanced-chat-tooltip">Join</button>
            <Tooltip id="advanced-chat-tooltip" place="top" effect="solid">
              Join the Advanced Discussions
            </Tooltip>
          </div>
          <div className="chat-item">
            <h3><FontAwesomeIcon icon={faQuoteRight} /> Cultural Talks</h3>
            <button className="join-btn" data-tooltip-id="cultural-talks-tooltip">Join</button>
            <Tooltip id="cultural-talks-tooltip" place="top" effect="solid">
              Join the Cultural Talks
            </Tooltip>
          </div>
        </div>
        <div className="user-profiles">
          <h2><FontAwesomeIcon icon={faUserFriends} /> User Profiles</h2>
          <div className="user-profile">
            <img src="path_to_placeholder_image" alt="User Avatar" />
            <div className="user-info">
              <p><strong>Name:</strong> Leila</p>
              <p><strong>Description:</strong> Learning</p>
              <button className="follow-btn" data-tooltip-id="follow-leila-tooltip">
                <FontAwesomeIcon icon={faUserPlus} /> Follow
              </button>
              <Tooltip id="follow-leila-tooltip" place="top" effect="solid">
                Follow Leila
              </Tooltip>
            </div>
          </div>
          <div className="user-profile">
            <img src="path_to_placeholder_image" alt="User Avatar" />
            <div className="user-info">
              <p><strong>Name:</strong> Ahmad</p>
              <p><strong>Description:</strong> Loves</p>
              <button className="follow-btn" data-tooltip-id="follow-ahmad-tooltip">
                <FontAwesomeIcon icon={faUserPlus} /> Follow
              </button>
              <Tooltip id="follow-ahmad-tooltip" place="top" effect="solid">
                Follow Ahmad
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="forum-section">
    <h2><FontAwesomeIcon icon={faEdit} /> Forum: General Discussion</h2>
    <div className="forum-thread">
      <h3>Thread: Introduce Yourself</h3>
      <p><strong>Description:</strong> Share a bit about yourself</p>
      <button
        onClick={() => {/* handle click event */}}
        className="view-profile-btn"
        aria-label="Learn more about the user"
        data-tooltip-id="view-profile-introduce-tooltip"
        style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
      >
        View Profile
      </button>
      <Tooltip id="view-profile-introduce-tooltip" place="top" effect="solid">
        Learn more about the user
      </Tooltip>
    </div>
    <div className="forum-thread">
      <h3>Thread: Favorite Arabic Phrases</h3>
      <p><strong>Description:</strong> Discuss your favorite phrases</p>
      <button
        onClick={() => {/* handle click event */}}
        className="view-profile-btn"
        aria-label="Learn more about the user"
        data-tooltip-id="view-profile-phrases-tooltip"
        style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
      >
        View Profile
      </button>
      <Tooltip id="view-profile-phrases-tooltip" place="top" effect="solid">
        Learn more about the user
      </Tooltip>
    </div>
          <button className="create-thread-btn" data-tooltip-id="create-thread-tooltip">
            <FontAwesomeIcon icon={faEdit} /> Create New Thread
          </button>
          <Tooltip id="create-thread-tooltip" place="top" effect="solid">
            Create a new discussion thread
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Community;
