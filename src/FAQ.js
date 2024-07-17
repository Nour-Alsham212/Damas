import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is BE DAMASCENE?',
      answer: 'BE DAMASCENE is a platform to learn Arabic language and culture.',
    },
    {
      question: 'How do I sign up?',
      answer: 'Click on the "Account" link in the navigation bar and follow the instructions to sign up.',
    },
    // Add more FAQs here...
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2><FontAwesomeIcon icon={faQuestionCircle} /> {faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
