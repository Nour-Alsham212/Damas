import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (text) => {
    const newMessage = { text, sender: 'user' };
    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { text: "This is a simulated response.", sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message chatbot-message-${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatbot-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatbot-input"
          placeholder="Type a message..."
          data-tooltip-id="input-tooltip"
        />
        <Tooltip id="input-tooltip" place="top" effect="solid">
          Type your message here
        </Tooltip>
        <button type="submit" className="chatbot-send-button" data-tooltip-id="send-tooltip">
          <FontAwesomeIcon icon={faPaperPlane} /> Send
        </button>
        <Tooltip id="send-tooltip" place="top" effect="solid">
          Click to send your message
        </Tooltip>
      </form>
    </div>
  );
};

export default Chatbot;
