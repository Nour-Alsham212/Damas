import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers, faCommentDots, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './index.css';

const Chat = () => {
  const chats = [
    {
      id: 1,
      title: 'Beginner Chat',
      description: 'A place for beginners to chat and learn together.',
      icon: faComments,
    },
    {
      id: 2,
      title: 'Advanced Discussions',
      description: 'Discuss advanced topics in Arabic language and culture.',
      icon: faUsers,
    },
    {
      id: 3,
      title: 'Cultural Talks',
      description: 'Join discussions about Arabic culture and traditions.',
      icon: faCommentDots,
    },
  ];

  return (
    <div className="chat-page">
      <h1>Chat</h1>
      <div className="chat-container">
        {chats.map((chat) => (
          <div key={chat.id} className="chat-card">
            <FontAwesomeIcon icon={chat.icon} className="chat-icon" />
            <h2>{chat.title}</h2>
            <p>{chat.description}</p>
            <button data-tooltip-id={`join-chat-tooltip-${chat.id}`}>
              <FontAwesomeIcon icon={faSignInAlt} /> Join Chat
            </button>
            <Tooltip id={`join-chat-tooltip-${chat.id}`} place="top" effect="solid">
              Join this chat
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
