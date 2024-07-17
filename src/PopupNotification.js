import React, { useEffect } from 'react';
import './index.css';

const PopupNotification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Automatically close after 5 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup-notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupNotification;
