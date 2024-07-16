import React, { useState } from 'react';


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
        />
        <button type="submit" className="chatbot-send-button">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
