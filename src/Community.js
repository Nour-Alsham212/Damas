import React from 'react';
const Community = () => {
  return (
    <div className="community-page">
      <h1>Community</h1>
      <div className="community-container">
        <div className="chat-section">
          <h2>Chat</h2>
          <div className="chat-item">
            <h3>Beginner Chat</h3>
            <button>Button</button>
          </div>
          <div className="chat-item">
            <h3>Advanced Discussions</h3>
            <button>Button</button>
          </div>
          <div className="chat-item">
            <h3>Cultural Talks</h3>
            <button>Button</button>
          </div>
        </div>
        <div className="user-profiles">
          <h2>User Profiles</h2>
          <div className="user-profile">
            <img src="path_to_placeholder_image" alt="User Avatar" />
            <div className="user-info">
              <p><strong>Name:</strong> Leila</p>
              <p><strong>Description:</strong> Learning</p>
              <button>Follow</button>
            </div>
          </div>
          <div className="user-profile">
            <img src="path_to_placeholder_image" alt="User Avatar" />
            <div className="user-info">
              <p><strong>Name:</strong> Ahmad</p>
              <p><strong>Description:</strong> Loves</p>
              <button>Follow</button>
            </div>
          </div>
        </div>
        <div className="forum-section">
          <h2>Forum: General Discussion</h2>
          <div className="forum-thread">
            <h3>Thread: Introduce Yourself</h3>
            <p><strong>Description:</strong> Share a bit about yourself</p>
            <a href="#">View Profile</a>
          </div>
          <div className="forum-thread">
            <h3>Thread: Favorite Arabic Phrases</h3>
            <p><strong>Description:</strong> Discuss your favorite phrases</p>
            <a href="#">View Profile</a>
          </div>
          <button>Create New Thread</button>
        </div>
      </div>
    </div>
  );
};

export default Community;
