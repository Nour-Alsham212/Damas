import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { Link, useHistory } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const [lessonsOpen, setLessonsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [searchField, setSearchField] = useState('');
  const history = useHistory();

  const toggleLessons = () => {
    setLessonsOpen(!lessonsOpen);
  };

  const toggleCommunity = () => {
    setCommunityOpen(!communityOpen);
  };

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchField.trim()) {
      history.push(`/search?query=${searchField}`);
    } else {
      alert('Please enter a search term');
    }
  };

  return (
    <nav className="navbar">
      <h1>BE DAMASCENE</h1>
      <div className="links">
        <Link to="/" data-tooltip-id="home-tooltip">Home</Link>
        <Tooltip id="home-tooltip" place="bottom" effect="solid">
          Go to homepage
        </Tooltip>
        <div className="dropdown" data-tooltip-id="lessons-tooltip">
          <button onClick={toggleLessons}>
            Lessons <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <Tooltip id="lessons-tooltip" place="bottom" effect="solid">
            View lessons categories
          </Tooltip>
          {lessonsOpen && (
            <div className="dropdown-content">
              <Link to="/lessons/beginner" data-tooltip-id="beginner-lessons-tooltip">Beginner</Link>
              <Tooltip id="beginner-lessons-tooltip" place="right" effect="solid">
                Beginner lessons
              </Tooltip>
              <Link to="/lessons/intermediate" data-tooltip-id="intermediate-lessons-tooltip">Intermediate</Link>
              <Tooltip id="intermediate-lessons-tooltip" place="right" effect="solid">
                Intermediate lessons
              </Tooltip>
              <Link to="/lessons/advanced" data-tooltip-id="advanced-lessons-tooltip">Advanced</Link>
              <Tooltip id="advanced-lessons-tooltip" place="right" effect="solid">
                Advanced lessons
              </Tooltip>
            </div>
          )}
        </div>
        <div className="dropdown" data-tooltip-id="community-tooltip">
          <button onClick={toggleCommunity}>
            Community <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <Tooltip id="community-tooltip" place="bottom" effect="solid">
            Join the community
          </Tooltip>
          {communityOpen && (
            <div className="dropdown-content">
              <Link to="/community/chat" data-tooltip-id="chat-tooltip">Chat</Link>
              <Tooltip id="chat-tooltip" place="right" effect="solid">
                Join the chat rooms
              </Tooltip>
              <Link to="/community/forum" data-tooltip-id="forum-tooltip">Forum</Link>
              <Tooltip id="forum-tooltip" place="right" effect="solid">
                Participate in forum discussions
              </Tooltip>
              <Link to="/community/profiles" data-tooltip-id="profiles-tooltip">User Profiles</Link>
              <Tooltip id="profiles-tooltip" place="right" effect="solid">
                View user profiles
              </Tooltip>
            </div>
          )}
        </div>
        <Link to="/culture" data-tooltip-id="culture-tooltip">Culture</Link>
        <Tooltip id="culture-tooltip" place="bottom" effect="solid">
          Learn about the culture
        </Tooltip>
        <Link to="/account" data-tooltip-id="account-tooltip">Account</Link>
        <Tooltip id="account-tooltip" place="bottom" effect="solid">
          Manage your account
        </Tooltip>
        <Link to="/faq" data-tooltip-id="faq-tooltip">FAQ</Link>
        <Tooltip id="faq-tooltip" place="bottom" effect="solid">
          Frequently Asked Questions
        </Tooltip>
        <Link to="/contact" data-tooltip-id="contact-tooltip">Contact Us</Link>
        <Tooltip id="contact-tooltip" place="bottom" effect="solid">
          Get in touch
        </Tooltip>
        <Link to="/auth" className="auth-button" data-tooltip-id="auth-tooltip">
          <FontAwesomeIcon icon={faUser} /> Sign In/Sign Up
        </Link>
        <Tooltip id="auth-tooltip" place="bottom" effect="solid">
          Sign In or Create an account
        </Tooltip>
      </div>
      <div className="search-box" data-tooltip-id="search-tooltip">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Search..."
            value={searchField}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-icon-btn">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </form>
        <Tooltip id="search-tooltip" place="bottom" effect="solid">
          Search the site
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;
