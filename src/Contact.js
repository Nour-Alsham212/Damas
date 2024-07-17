import React, { useState } from 'react';
import Footer from './Footer';
import { Tooltip } from 'react-tooltip';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title) newErrors.title = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!subject) newErrors.subject = 'Subject is required';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (window.confirm("Are you sure you want to submit the form?")) {
        setSubmitted(true);
      }
    }
  };

  const handleUndo = () => {
    setSubmitted(false);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <h2>If you have any question, feel free to get in touch with us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h3>Contact form</h3>
          <label>NAME:</label>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (e.target.value) {
                setErrors((prev) => ({ ...prev, title: '' }));
              }
            }}
            data-tooltip-id="name-tooltip"
          />
          <Tooltip id="name-tooltip" place="top" effect="solid">
            Enter your full name
          </Tooltip>
          {errors.title && <p className="error-message">{errors.title}</p>}
          <label>EMAIL:</label>
          <input
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value && validateEmail(e.target.value)) {
                setErrors((prev) => ({ ...prev, email: '' }));
              }
            }}
            data-tooltip-id="email-tooltip"
          />
          <Tooltip id="email-tooltip" place="top" effect="solid">
            Enter a valid email address
          </Tooltip>
          {errors.email && <p className="error-message">{errors.email}</p>}
          <label>SUBJECT:</label>
          <input
            type="text"
            placeholder="Subject"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              if (e.target.value) {
                setErrors((prev) => ({ ...prev, subject: '' }));
              }
            }}
            data-tooltip-id="subject-tooltip"
          />
          <Tooltip id="subject-tooltip" place="top" effect="solid">
            Enter the subject of your message
          </Tooltip>
          {errors.subject && <p className="error-message">{errors.subject}</p>}
          <label>MESSAGE:</label>
          <textarea
            placeholder="Add Your Message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (e.target.value) {
                setErrors((prev) => ({ ...prev, message: '' }));
              }
            }}
            data-tooltip-id="message-tooltip"
          ></textarea>
          <Tooltip id="message-tooltip" place="top" effect="solid">
            Enter your message
          </Tooltip>
          {errors.message && <p className="error-message">{errors.message}</p>}
          <button type="submit" data-tooltip-id="submit-tooltip">SUBMIT</button>
          <Tooltip id="submit-tooltip" place="top" effect="solid">
            Click to submit your message
          </Tooltip>
        </form>
      ) : (
        <div>
          <h3>Thank you for your message!</h3>
          <button onClick={handleUndo} data-tooltip-id="undo-tooltip">Undo</button>
          <Tooltip id="undo-tooltip" place="top" effect="solid">
            Click to undo your submission
          </Tooltip>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Contact;
